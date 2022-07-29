from flask import Blueprint, jsonify, request
from blueprints.users import controller as user_ctrl


user_master: Blueprint = Blueprint('user_master', __name__ , url_prefix='/api/user')

@user_master.route('/register' , methods=['POST'])
def register():
    try :
        user_ctrl.register_user()
        content = {
            'message' : 'User created'
        }

    except ValueError as ex:
        
        content = {
            'message' : '{}'.format(str(ex))
        }

    except Exception :
        content = {
            'message' : 'Create user failed'
        }
    return jsonify(content)


@user_master.route('/login' , methods = ['POST'])
def login():
    try:
        result = user_ctrl.login()
        return result
    
    except ValueError as ex:
        content = {
            'message' : '{}'.format(str(ex))
        }
    except Exception :
        content = {
            'message' : 'Create user failed'
        }
    return jsonify(content)

@user_master.route('/<user_id>', methods=['GET'])
def get_user_ID(user_id):
    user_id = int(user_id)
    user = user_ctrl.get_user_by_id(user_id)
    return user

@user_master.route('/all', methods=['GET'])
def getall():
    result = user_ctrl.get_all_users()
    return result






    

    
    
    
