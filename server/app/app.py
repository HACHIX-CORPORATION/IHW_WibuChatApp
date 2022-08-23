from socket import socket
from flask import Flask, redirect, render_template, request, session
from flask_jwt_extended import JWTManager, get_jwt_identity, jwt_required
from flask_restful import Api
from blueprints.users.route import user
from blueprints.rooms.router import room
from blueprints.messages.route import message
from flask_cors import CORS
from flask_socketio import SocketIO, send, join_room, leave_room, emit
from blueprints.messages.models import MessageModel
from blueprints.users.models import UserModel
from blueprints.rooms.models import RoomModel
import time
from flasgger import Swagger
# from sockets import connection_socket

app = Flask(__name__, template_folder='templates')
# app = Flask(__name__, instance_relative_config=True,
#             template_folder='../../client/dist')

swagger = Swagger(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS-'] = False



CORS(app, resource={r"/*": {"origins": "*"}}, allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "cache-control", "Pragma", "Expires","Access-Control-Allow-Credentials"], supports_credentials= True)

# socketio = SocketIO(app, cors_allowed_origins='*')

api = Api(app)

app.config['SECRET_KEY'] = "12345678"
app.config["JWT_SECRET_KEY"] = "jose"
app.config['JWT_TOKEN_LOCATION'] = ['cookies']
app.config['JWT_ACCESS_COOKIE_PATH'] = '/'
app.config['JWT_REFRESH_COOKIE_PATH'] = '/token/refresh'
app.config['JWT_COOKIE_CSRF_PROTECT'] = False
jwt = JWTManager(app)

app.register_blueprint(user)
app.register_blueprint(room)
app.register_blueprint(message)


@app.route("/", defaults={"path": ""})
def root(path):
    return main("index.html")


def main(path):
    return render_template("index.html")

@app.route("/home/<path:path>")
def home(path):
    return main(path)





# @app.route('/')
# def home():
#     return render_template('home.html')

# @app.route('/hi')
# def home1():
#     return render_template('protected.html')

@app.route('/homechat')
def home3():
    return render_template('homechat.html')
