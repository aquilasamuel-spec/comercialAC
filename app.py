import os
from flask import Flask, render_template, request, jsonify, session, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import uuid

app = Flask(__name__)
app.secret_key = 'agconnect_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    login = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    role = db.Column(db.String(20), default='comum')
    status = db.Column(db.String(20), default='pendente')

with app.app_context():
    db.create_all()
    # Criar admin se nao existir
    if not User.query.filter_by(login='admin').first():
        admin = User(id=str(uuid.uuid4()), login='admin', password='123', role='master', status='ativo')
        db.session.add(admin)
        db.session.commit()

@app.route('/')
def index():
    if 'user_id' not in session:
        return redirect(url_for('login_page'))
    return render_template('index.html')

@app.route('/login')
def login_page():
    view = request.args.get('view')
    if 'user_id' in session:
        if view == 'gestao':
            user = User.query.get(session['user_id'])
            if user and user.role != 'master':
                # Se quer abrir gestao mas nao eh master, renderiza login para relogar
                pass
            else:
                pass
        else:
            return redirect(url_for('index'))
    return render_template('login.html')

# -- API Routes --
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    login = data.get('login')
    password = data.get('password')
    user = User.query.filter_by(login=login, password=password).first()
    
    if user:
        if user.status == 'pendente':
            return jsonify({'success': False, 'message': 'O seu acesso ainda está pendente de aprovação pelo administrador.'})
        session['user_id'] = user.id
        session['user_role'] = user.role
        session['user_login'] = user.login
        return jsonify({'success': True, 'role': user.role})
    return jsonify({'success': False, 'message': 'Login ou senha incorretos.'})

@app.route('/api/logout', methods=['POST'])
def api_logout():
    session.clear()
    return jsonify({'success': True})

@app.route('/api/session', methods=['GET'])
def api_session():
    if 'user_id' in session:
        return jsonify({'logged_in': True, 'login': session.get('user_login'), 'role': session.get('user_role')})
    return jsonify({'logged_in': False})

@app.route('/api/users', methods=['GET'])
def api_users():
    if session.get('user_role') != 'master':
        return jsonify({'error': 'Unauthorized'}), 403
    users = User.query.all()
    return jsonify([{
        'id': u.id,
        'login': u.login,
        'password': u.password, # em doc real nunca mandar password, mas como é pra admin ver/editar estamos mandando.
        'role': u.role,
        'status': u.status
    } for u in users])

@app.route('/api/users', methods=['POST'])
def api_user_add_or_request():
    data = request.json
    login = data.get('login')
    password = data.get('password')
    role = data.get('role', 'comum')
    is_solicitation = data.get('is_solicitation', False)
    
    if User.query.filter_by(login=login).first():
        return jsonify({'success': False, 'message': 'Esse login já existe. Escolha outro.'})
        
    status = 'pendente' if is_solicitation else 'ativo'
    if not is_solicitation and session.get('user_role') != 'master':
        return jsonify({'success': False, 'message': 'Não autorizado'}), 403
        
    new_user = User(id=str(uuid.uuid4()), login=login, password=password, role=role, status=status)
    db.session.add(new_user)
    db.session.commit()
    
    msg = 'Acesso solicitado! Seu login está PENDENTE da aprovação do Administrador.' if is_solicitation else 'Usuário salvo com sucesso.'
    return jsonify({'success': True, 'message': msg})

@app.route('/api/users/<id>', methods=['PUT', 'DELETE'])
def api_user_edit_delete(id):
    if session.get('user_role') != 'master':
        return jsonify({'error': 'Unauthorized'}), 403
        
    user = User.query.get(id)
    if not user:
        return jsonify({'success': False, 'message': 'Usuário não encontrado'}), 404
        
    if request.method == 'DELETE':
        db.session.delete(user)
        db.session.commit()
        return jsonify({'success': True})
        
    if request.method == 'PUT':
        data = request.json
        if 'login' in data: user.login = data['login']
        if 'password' in data: user.password = data['password']
        if 'role' in data: user.role = data['role']
        if 'status' in data: user.status = data['status']
        db.session.commit()
        return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
