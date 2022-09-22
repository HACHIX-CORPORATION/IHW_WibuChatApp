from codecs import utf_8_encode
from email import charset
from blueprints.messages.models import MessageModel
from blueprints.rooms.models import RoomModel
from blueprints.users.models import UserModel
from flask_socketio import send, emit, join_room, SocketIO
from flask import request, jsonify
from app.app import app
import json

socketio = SocketIO(app, cors_allowed_origins='*')


@socketio.on('send_message')
def on_message(data):
    mess = data['mess']
    room_name = data['room_name']
    user_id = data['user_id']
    room_db = RoomModel.find_by_name(room_name)
    user = UserModel.find_by_id(user_id)

    if mess == "":
        print('message is null')
    elif room_db and user:
        message = MessageModel(room_id=room_db.room_id,
                               user_id=user.user_id, message=mess)
        message.save_to_db()
        content = {
            'user_id': user.user_id,
            'user_name': user.username,
            'room_id': room_db.room_id,
            'room_name': room_db.room_name,
            'mess': mess
        }
        json_string = json.dumps(content)
        emit("receive_message", json_string, room=room_name,
             broadcast=True, include_self=False)
        print("Message is : {}".format(str(mess)))

    else:
        print('failed message')
        send('failed message')

@socketio.on('join')
def on_join(data):
    room_name = data['room_name']
    user_id = data['user_id']
    join_room(room_name)
    room_db = RoomModel.find_by_name(room_name)
    user = UserModel.find_by_id(user_id)
    if room_db and user:
        emit("new_join", user.username + " has joined the " +
             room_name + " room.", room=room_name)
        print("join successfull")
    else:
        print("Not found room")
        send('Not found room')


@socketio.on('disconnect')
def test_disconnect():
    print('[DISCONNECTED] ' + request.sid)
