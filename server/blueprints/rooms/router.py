from http import HTTPStatus
from flask import Blueprint,jsonify,render_template ,request
from flask_jwt_extended import jwt_required
from blueprints.rooms import controller as room_ctrl

room: Blueprint = Blueprint('room',__name__ , url_prefix='/api/room')

@room.route('/' , methods = ['POST'] )
def create_room():
    """
    file: ./schemas/create_room.yml
    """
    try:
        result = room_ctrl.create_table()
        content = {
            'message' : 'Room created',
            'room_id' : result
        }
        status = HTTPStatus.OK
        

    except ValueError as ex :
        content = {
            'message' : '{}'.format(str(ex))
        }
        status = HTTPStatus.BAD_REQUEST

    except Exception as ex :
        content = {
            'message' : 'Create room failed'
        }
        status = HTTPStatus.INTERNAL_SERVER_ERROR
    return jsonify(content),status

@room.route('/' , methods = ['GET'])
def get_all_rooms():
    """
    file: ./schemas/get_all_rooms.yml
    """
    try :
        rooms = room_ctrl.get_all_rooms()
        status = HTTPStatus.OK
        content = rooms
    except Exception :
        content = {
            "message" : "Get all room failed"
        }
        status = HTTPStatus.INTERNAL_SERVER_ERROR
    return jsonify(content),status
    
