from flask import Blueprint, jsonify, request ,render_template
from flask_jwt_extended import get_jwt_identity, jwt_required, unset_jwt_cookies
from blueprints.users import controller as user_ctrl
from app.db import db
from http import HTTPStatus

user: Blueprint = Blueprint('user', __name__ , url_prefix='/api/user')

@user.route('/register' , methods=['POST'])
def register():
    """
    file: ./schemas/user_register.yml
    """
    try :
        user_ctrl.register_user()
        content = {
            'message' : 'successful registration'
        }
        status = HTTPStatus.OK
        #200

    except ValueError as ex:
        
        content = {
            'message' : '{}'.format(str(ex))
        }
        status = HTTPStatus.BAD_REQUEST
        #400

    except Exception :
        content = {
            'message' : 'Create user failed'
        }
        status = HTTPStatus.INTERNAL_SERVER_ERROR
        #500
    return jsonify(content),status


@user.route('/login' , methods = ['POST'])
def login():
    """
    file: ./schemas/user_login.yml
    """
    try:
        result = user_ctrl.login()
        status = HTTPStatus.OK
        return result,status

    except ValueError as ex:
        content = {
            'message' : '{}'.format(str(ex))
        }
        status = HTTPStatus.NOT_FOUND

    except Exception :
        content = {
            'message' : 'Login user failed'
        }
        status = HTTPStatus.INTERNAL_SERVER_ERROR
    return jsonify(content),status
    

@user.route('/<user_id>', methods=['GET'])
def get_user_ID(user_id):
    user_id = int(user_id)
    user = user_ctrl.get_user_by_id(user_id)
    return user

@user.route('/', methods=['GET'])
def get_all_users():
    result = user_ctrl.get_all_users()
    return result

# @user_master.route('/protected' , methods=['GET'])
# @jwt_required()
# def protected():
#     current_user = get_jwt_identity()
#     return {'message' : current_user}

@user.route('/logout' , methods=['POST'])
def logout():
    resp = jsonify({'message' : 'logout success'})
    unset_jwt_cookies(resp)
    status = HTTPStatus.OK
    return resp,status





    

    
    
    
