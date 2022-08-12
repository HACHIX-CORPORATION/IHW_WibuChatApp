from xml.sax import parseString
from flask import Flask, redirect, render_template,request
from flask_jwt_extended import JWTManager
from flask_restful import Api
from blueprints.users.route import user_master
from flask_cors import CORS

from flask_socketio import SocketIO ,send



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS-'] = False

CORS(app, resources={r'/*': {'origins': '*'}})

socketio = SocketIO(app, cors_allowed_origins='*')



api = Api(app)

app.config['SECRET_KEY'] = "12345678"
app.config["JWT_SECRET_KEY"] = "jose"  # Change this!
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_ACCESS_COOKIE_PATH'] = '/api/'
app.config['JWT_REFRESH_COOKIE_PATH'] = '/token/refresh'
app.config['JWT_COOKIE_CSRF_PROTECT'] = False
jwt = JWTManager(app) 


app.register_blueprint(user_master)

@socketio.on('message')
def handle_message(data):
    print('recevied message : ' + data )
    send(data)

@socketio.on('connect')
def client_connect():
    pass





