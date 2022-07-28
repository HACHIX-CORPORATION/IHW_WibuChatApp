from flask import redirect, render_template, request
from blueprints.users.models import UserModel
from app.db import db
import hmac


# def get_all_users():
#     users = UserModel.query.all()
#     return {'users' : users}

def register_user():
    try:
        data = request.get_json()
        if UserModel.find_by_name(data['username']):
            raise ValueError("The user already exitis")

        user = UserModel(data['username'],data['password'],data['rePassword'],data['telephone'],data['mail'],data['date'],data['avatar'])
        user.save_to_db()

    except Exception as ex:
        db.session.rollback()
        raise ex
    finally :
        db.session.close()

def login():
    try:
        data = request.get_json()
        user =  UserModel.find_by_name(data['username'])
        if user is None :
            raise ValueError("The user not found")
        
        if user and hmac.compare_digest(user.password , data['password']):
            return {
                'message' : 'login success',
                'id' : user.id
                }
        else :
            raise ValueError("incorrect password")

    except Exception as ex:
        db.session.rollback()
        raise ex
    finally :
        db.session.close()

# def get_user_by_id(user_id: int):

    

#     user = UserModel.query.filter_by(id = user_id).first()
#     if user is None:
#         return {}

#     return user.json()


def get_user_by_id(user_id: int):
    user = UserModel.find_by_id(user_id)
    if user :
        return user.json()
    return {'message' : 'The user not found'}



    



        
        

   



