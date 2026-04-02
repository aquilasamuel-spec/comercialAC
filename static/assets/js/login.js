document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elmentos de visualização
    const viewLogin = document.getElementById('view-login');
    const viewDashboard = document.getElementById('view-dashboard');
    const loginContainer = document.querySelector('.login-container');
    
    // Formulário de Login
    const loginForm = document.getElementById('login-form');
    const btnLogout = document.getElementById('btn-logout');
    const btnSolicitar = document.getElementById('btn-solicitar');

    // Tabela e Modal de Gestão
    const tbody = document.getElementById('users-tbody');
    const btnAddUser = document.getElementById('btn-add-user');
    const userModal = document.getElementById('user-modal');
    const userForm = document.getElementById('user-form');
    const btnCancelModal = document.getElementById('btn-cancel-modal');
    
    // Inputs do Modal
    const modalTitle = document.getElementById('modal-title');
    const inputId = document.getElementById('user-id');
    const inputLoginModal = document.getElementById('modal-login');
    const inputPasswordModal = document.getElementById('modal-password');
    const inputRoleModal = document.getElementById('modal-role');
    const roleGroup = document.getElementById('role-group');

    // Identificação de modal
    let isSolicitation = false;

    // --- Navegação ---
    function showDashboard() {
        viewLogin.classList.remove('on');
        viewLogin.classList.add('off');
        loginContainer.classList.add('is-dashboard');
        
        setTimeout(() => {
            viewLogin.style.display = 'none';
            viewDashboard.style.display = 'block';
            setTimeout(() => {
                viewDashboard.classList.remove('off');
                viewDashboard.classList.add('on');
            }, 50);
            renderTable();
        }, 300);
    }

    function showLogin(msg = null) {
        viewDashboard.classList.remove('on');
        viewDashboard.classList.add('off');
        loginContainer.classList.remove('is-dashboard');
        
        if (msg) {
            alert(msg);
        }

        setTimeout(() => {
            viewDashboard.style.display = 'none';
            viewLogin.style.display = 'block';
            setTimeout(() => {
                viewLogin.classList.remove('off');
                viewLogin.classList.add('on');
            }, 50);
            
            loginForm.reset();
        }, 300);
    }

    // Checar Params de URL e verificar a sessão para Gestão
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get('view') === 'gestao') {
        fetch('/api/session').then(r => r.json()).then(data => {
            if(data.logged_in && data.role === 'master') {
                showDashboard();
            } else if (data.logged_in) {
                showLogin('Você não tem permissão para acessar a Gestão. Faça login com uma conta Master.');
            } else {
                // Not logged in -> show login form
                showLogin();
            }
        });
    }

    // --- Ações de Login ---
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const inputLogin = document.getElementById('input-login').value.trim();
        const inputPass = document.getElementById('input-password').value.trim();
        
        try {
            const resp = await fetch('/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({login: inputLogin, password: inputPass})
            });
            const data = await resp.json();
            
            if(data.success) {
                // Redireciona para o index, que já deixará entrar
                window.location.href = '/';
            } else {
                alert(data.message || 'Login ou senha incorretos.');
            }
        } catch(err) {
            console.error(err);
            alert('Erro de comunicação com o servidor.');
        }
    });

    btnLogout.addEventListener('click', async () => {
        await fetch('/api/logout', {method: 'POST'});
        showLogin();
        window.history.replaceState({}, document.title, '/login');
    });

    btnSolicitar.addEventListener('click', (e) => {
        e.preventDefault();
        isSolicitation = true;
        openModal(null);
    });

    // --- Lógica de Gestão de Acesso ---
    async function renderTable() {
        tbody.innerHTML = '';
        try {
            const res = await fetch('/api/users');
            if(!res.ok) {
                console.error('Falha ao obter usuários');
                return;
            }
            const users = await res.json();
            
            if(users.length === 0) {
                tbody.innerHTML = `<tr><td colspan="4" class="text-center" style="color: rgba(255,255,255,0.5);">Nenhum usuário cadastrado.</td></tr>`;
                return;
            }

            users.forEach((u, index) => {
                const tr = document.createElement('tr');
                let statusHtml = '';
                let actionHtml = '';
                let roleHtml = u.role === 'master' 
                    ? '<span style="color: #38bdf8; font-weight: bold;">Master</span>' 
                    : '<span style="color: rgba(255,255,255,0.6);">Comum</span>';
                
                if(u.status === 'pendente') {
                    statusHtml = `<span style="color: #f59e0b; font-size: 0.8rem; margin-right: 10px; font-weight: bold;">(Pendente)</span>`;
                    actionHtml = `<button class="action-btn edit" style="border-color: #f59e0b; color: #f59e0b;" onclick="window.approveUser('${u.id}')">Aprovar</button>`;
                } else {
                    statusHtml = ``;
                    actionHtml = `<button class="action-btn edit" onclick="window.editUser('${u.id}', '${u.login}', '${u.password}', '${u.role}')">Editar</button>`;
                }
                
                actionHtml += `<button class="action-btn delete" onclick="window.deleteUser('${u.id}')">Excluir</button>`;

                tr.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${statusHtml} ${u.login}</td>
                    <td>${roleHtml}</td>
                    <td>${actionHtml}</td>
                `;
                tbody.appendChild(tr);
            });
        } catch(err) {
            console.error(err);
        }
    }

    // Export functions to window because buttons have onclick=""
    window.editUser = function(id, login, password, role) {
        isSolicitation = false;
        openModal({id, login, password, role});
    }
    
    window.approveUser = async function(id) {
        try {
            const resp = await fetch(`/api/users/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({status: 'ativo'})
            });
            const data = await resp.json();
            if(data.success) {
                alert('Acesso aprovado com sucesso!');
                renderTable();
            } else {
                alert('Falha ao aprovar: ' + data.message);
            }
        } catch(err) {
            console.error(err);
            alert('Erro de rede.');
        }
    }

    window.deleteUser = async function(id) {
        if(confirm('Tem certeza que deseja excluir este acesso?')) {
            try {
                const resp = await fetch(`/api/users/${id}`, {method: 'DELETE'});
                if(resp.ok) renderTable();
            } catch(e) {
                console.error(e);
            }
        }
    }

    // --- Modal ---
    function openModal(user = null) {
        if(isSolicitation) {
            roleGroup.style.display = 'none';
        } else {
            roleGroup.style.display = 'block';
        }

        if(user) {
            modalTitle.textContent = 'Editar Usuário';
            inputId.value = user.id;
            inputLoginModal.value = user.login;
            inputPasswordModal.value = user.password;
            inputRoleModal.value = user.role || 'comum';
        } else {
            if(isSolicitation) {
                modalTitle.textContent = 'Solicitar Acesso';
            } else {
                modalTitle.textContent = 'Novo Usuário';
            }
            userForm.reset();
            inputId.value = '';
            inputRoleModal.value = 'comum';
        }
        userModal.classList.remove('off');
    }

    function closeModal() {
        userModal.classList.add('off');
        userForm.reset();
        isSolicitation = false;
    }

    btnCancelModal.addEventListener('click', closeModal);
    btnAddUser.addEventListener('click', () => {
        isSolicitation = false;
        openModal(null);
    });

    // Salvar Usuário ou Solicitação
    userForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = inputId.value;
        const login = inputLoginModal.value.trim();
        const password = inputPasswordModal.value.trim();

        if(!login || !password) return;
        const role = isSolicitation ? 'comum' : inputRoleModal.value;

        try {
            if(id) { // Editando
                const resp = await fetch(`/api/users/${id}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({login, password, role})
                });
                const data = await resp.json();
                if(data.success) {
                    renderTable();
                    closeModal();
                } else {
                    alert('Erro: ' + (data.message || 'Desconhecido'));
                }
            } else { // Criando / Solicitando
                const resp = await fetch('/api/users', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({login, password, role, is_solicitation: isSolicitation})
                });
                const data = await resp.json();
                
                if(data.success) {
                    alert(data.message);
                    if(!isSolicitation) renderTable();
                    closeModal();
                } else {
                    alert('Erro: ' + data.message);
                }
            }
        } catch(err) {
            console.error(err);
            alert('Erro na comunicação.');
        }
    });
});
