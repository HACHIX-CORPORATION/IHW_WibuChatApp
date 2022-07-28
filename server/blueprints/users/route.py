from flask import Blueprint, jsonify, request
from blueprints.users import controller as user_ctrl


user_master: Blueprint = Blueprint('user_master', __name__ , url_prefix='/user')

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






    

    
    
    
