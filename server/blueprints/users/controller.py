
from flask import redirect, render_template, request
from blueprints.users.models import UserModel
from app.db import db
import hmac



def register_user(**data):
    try:
        data = request.get_json()
        if UserModel.find_by_name(data['username']):
            raise ValueError("The user already exitis")

        user = UserModel(data)
        user.save_to_db()

        # body = {
        #     "avatar": req['avatar'],
        #     "date": req['date'],
        #     "mail": req['mail'],
        #     "password": req['password'],
        #     "rePassword": req['rePassword'],
        #     "telephone": req['telephone'],
        #     "username": req['username']
        # }

        # user = UserModel(data['username'],**data)
        

    except Exception as ex:
        db.session.rollback()
        raise ex
    finally:
        db.session.close()


def login():
    try:
        data = request.get_json()
        user = UserModel.find_by_name(data['username'])
        if user is None:
            raise ValueError("The user not found")

        if user and hmac.compare_digest(user.password, data['password']):
            return {
                'message': 'login success',
                'id': user.id
            }
        else:
            raise ValueError("incorrect password")

    except Exception as ex:
        db.session.rollback()
        raise ex
    finally:
        db.session.close()




def get_user_by_id(user_id: int):
    user = UserModel.find_by_id(user_id)
    if user:
        return user.convert_json()
    return {'message': 'The user not found'}
