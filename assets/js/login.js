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

    // Identificação de modal (se é solicitação ou edição/cadastro de admin)
    let isSolicitation = false;

    // --- Estado da Aplicação Mockado ---
    let users = JSON.parse(localStorage.getItem('ac_users')) || [
        { id: '1', login: 'admin', password: '123', status: 'ativo', role: 'master' },
        { id: '2', login: 'diretoria', password: '123', status: 'ativo', role: 'comum' },
        { id: '3', login: 'operador_1', password: '123', status: 'ativo', role: 'comum' },
        { id: '4', login: 'novo_operador', password: '123', status: 'pendente', role: 'comum' }
    ];

    // Migração de estado antigo (se já houver caches no localStorage)
    users = users.map(u => ({ 
        ...u, 
        status: u.status || 'ativo', 
        role: u.role || (u.login === 'admin' ? 'master' : 'comum') 
    }));

    function saveUsers() {
        localStorage.setItem('ac_users', JSON.stringify(users));
    }

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

    // Checar Params de URL
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get('view') === 'gestao') {
        const loggedLogin = localStorage.getItem('ac_logged_user');
        const activeUser = users.find(u => u.login === loggedLogin && u.status === 'ativo');
        
        if(activeUser && activeUser.role === 'master') {
            showDashboard();
        } else {
            showLogin('Você não tem permissão para acessar a Gestão. Faça login com uma conta Master.');
        }
    }

    // --- Ações de Login ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputLogin = document.getElementById('input-login').value.trim();
        const inputPass = document.getElementById('input-password').value.trim();
        
        // Verifica na lista de usuários mockada
        const user = users.find(u => u.login === inputLogin && u.password === inputPass);
        
        if(user) {
            if(user.status === 'pendente') {
                alert('O seu acesso ainda está pendente de aprovação pelo administrador.');
            } else {
                // Logado com sucesso
                localStorage.setItem('ac_logged_user', user.login);
                window.location.href = 'index.html';
            }
        } else {
            alert('Login ou senha incorretos.');
        }
    });

    btnLogout.addEventListener('click', () => {
        localStorage.removeItem('ac_logged_user');
        showLogin();
        // Remove param view=gestao se existir
        window.history.replaceState({}, document.title, 'login.html');
    });

    btnSolicitar.addEventListener('click', (e) => {
        e.preventDefault();
        isSolicitation = true;
        openModal(null);
    });

    // --- Lógica de Gestão de Acesso ---
    function renderTable() {
        tbody.innerHTML = '';
        if(users.length === 0) {
            tbody.innerHTML = `<tr><td colspan="3" class="text-center" style="color: rgba(255,255,255,0.5);">Nenhum usuário cadastrado.</td></tr>`;
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
                actionHtml = `<button class="action-btn edit" onclick="window.editUser('${u.id}')">Editar</button>`;
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
    }

    // Export functions to window because buttons have onclick=""
    window.editUser = function(id) {
        isSolicitation = false;
        openModal(id);
    }
    
    window.approveUser = function(id) {
        const user = users.find(u => u.id === id);
        if(user) {
            user.status = 'ativo';
            saveUsers();
            renderTable();
            alert('Acesso aprovado com sucesso!');
        }
    }

    window.deleteUser = function(id) {
        if(confirm('Tem certeza que deseja excluir este acesso?')) {
            users = users.filter(u => u.id !== id);
            saveUsers();
            renderTable();
        }
    }

    // --- Modal ---
    function openModal(id = null) {
        if(isSolicitation) {
            roleGroup.style.display = 'none';
        } else {
            roleGroup.style.display = 'block';
        }

        if(id) {
            modalTitle.textContent = 'Editar Usuário';
            const user = users.find(u => u.id === id);
            if(user) {
                inputId.value = user.id;
                inputLoginModal.value = user.login;
                inputPasswordModal.value = user.password;
                inputRoleModal.value = user.role || 'comum';
            }
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
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = inputId.value;
        const login = inputLoginModal.value.trim();
        const password = inputPasswordModal.value.trim();

        if(!login || !password) return;

        const role = isSolicitation ? 'comum' : inputRoleModal.value;

        // Validar se o login já existe caso não seja edição
        if(!id && users.some(u => u.login === login)) {
            alert('Esse login já existe. Escolha outro.');
            return;
        }

        if(id) { // Editando
            const user = users.find(u => u.id === id);
            if(user) {
                user.login = login;
                user.password = password;
                user.role = role;
            }
        } else { // Criando
            const newId = Date.now().toString();
            // Se for do painel gestao fica ativo (assumindo que o admin criaria direto)
            // Se for de fora (isSolicitation), fica pendente
            const status = isSolicitation ? 'pendente' : 'ativo';
            users.push({ id: newId, login, password, status, role });
        }

        saveUsers();
        
        if(isSolicitation) {
            alert('Acesso solicitado! Seu login está PENDENTE da aprovação do Administrador.');
        } else {
            renderTable();
        }
        closeModal();
    });
});
