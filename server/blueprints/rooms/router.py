
from http import HTTPStatus
from flask import Blueprint,jsonify,render_template ,request
from flask_jwt_extended import jwt_required
from blueprints.rooms import controller as room_ctrl

room_master: Blueprint = Blueprint('room_master',__name__)

@room_master.route('/room' , methods = ['POST'] )
@jwt_required()
def create_room():
    try:
        room_ctrl.create_table()
        content = {
            'message' : 'Room created'
        }

    except ValueError as ex :
        content = {
            'message' : '{}'.format(str(ex))
        }

    except Exception as ex :
        content = {
            'message' : 'Create room failed'
        }
    return jsonify(content)

@room_master.route('/rooms' , methods = ['GET'])
def get_all_rooms():
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
    
