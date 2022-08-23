from blueprints.messages.models import MessageModel
from blueprints.rooms.models import RoomModel
from blueprints.users.models import UserModel
from flask_socketio import send,emit,join_room,SocketIO
from flask import request
from app.app import app

socketio = SocketIO(app, cors_allowed_origins='*')

@socketio.on('message')
def chat_room(data):
    mess = data['mess']
    room = data['room']
    user_id = data['user_id']
    room_db = RoomModel.find_by_name(room)
    user = UserModel.find_by_id(user_id)
    if room_db and user:
        message = MessageModel(room_id=room_db.room_id, user_id=user.user_id, message=mess)
        message.save_to_db()
        emit("new_message", user.username + " : " + mess, room=room)
    else :
        send('failed message')


@socketio.on('join')
def on_join(data):
    room = data['room']
    user_id = data['user_id']
    join_room(room)
    room_db = RoomModel.find_by_name(room)
    user = UserModel.find_by_id(user_id)
    if room_db and user:
        emit("new_join", user.username + " has joined the " + room + " room.", room=room)
    else:
        send('Not found room')


@socketio.on('disconnect')
def test_disconnect():
    print('[DISCONNECTED] ' + request.sid)