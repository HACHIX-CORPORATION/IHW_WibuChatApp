from flask import Blueprint,jsonify,render_template ,request
from flask_jwt_extended import jwt_required
from blueprints.rooms import controller as room_ctrl

room_master: Blueprint = Blueprint('room_master',__name__)

@room_master.route('/room' , methods = ['GET','POST'] )
@jwt_required()
def create_room():
    if request.method == 'POST':
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
    return render_template('room.html')
