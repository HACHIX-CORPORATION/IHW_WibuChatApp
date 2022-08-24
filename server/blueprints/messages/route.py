from http import HTTPStatus
from flask import Blueprint,jsonify,request
from blueprints.messages import controller as mess_ctrl

message: Blueprint = Blueprint('message', __name__ , url_prefix='/api/mess')

@message.route('/', methods = ['GET'])
def get_mess_in_room():
    """
    file: ./schemas/get_all_mess.yml
    """
    try:
        # room_id = int(room_id)
        room_id = request.args['room_id']
        mess = mess_ctrl.get_mess_by_roomID(room_id)
        status = HTTPStatus.OK
        return mess,status
    except Exception:
        content = {
            "message" : "Get all messages failed"
        }
        status = HTTPStatus.INTERNAL_SERVER_ERROR
    return jsonify(content),status