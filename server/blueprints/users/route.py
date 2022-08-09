from flask import Blueprint, jsonify, request, render_template
from flask_jwt_extended import get_jwt_identity, jwt_required, unset_jwt_cookies
from blueprints.users import controller as user_ctrl
from app.db import db

user_master: Blueprint = Blueprint('user_master', __name__)


@user_master.route('/register', methods=['POST'])
def register():
    try:
        user_ctrl.register_user()
        content = {
            'message': 'User created'
        }

    except ValueError as ex:

        content = {
            'message': '{}'.format(str(ex))
        }

    except Exception:
        content = {
            'message': 'Create user failed'
        }
    return jsonify(content)


# @user_master.route('/login' , methods = ['GET','POST'])
@user_master.route('/login', methods=['POST'])
def login():
    # if request.method == 'POST':
    try:
        result = user_ctrl.login()
        return result

    except ValueError as ex:
        content = {
            'message': '{}'.format(str(ex))
        }

    except Exception:
        content = {
            'message': 'Login user failed'
        }
    return jsonify(content)

    # return render_template('index.html')

# @user_master.route('/<user_id>', methods=['GET'])
# @jwt_required()
# def get_user_ID(user_id):
#     user_id = int(user_id)
#     user = user_ctrl.get_user_by_id(user_id)
#     return user


@user_master.route('/all', methods=['GET'])
def getall():
    result = user_ctrl.get_all_users()
    return result


@user_master.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return {'message': current_user}


@user_master.route('/logout', methods=['POST'])
def logout():
    resp = jsonify({'message': 'logout success'})
    unset_jwt_cookies(resp)
    return resp
