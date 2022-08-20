from flask import jsonify
from app.db import db


class UserModel(db.Model):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(256), nullable=False)
    password = db.Column(db.String(256), nullable=False)
    re_password = db.Column(db.String(256), nullable=False)
    telephone = db.Column(db.String(256), nullable=False)
    mail = db.Column(db.String(256), nullable=False)
    date = db.Column(db.String(256), nullable=False)
    avatar = db.Column(db.String(256), nullable=False)
    count = db.Column(db.Integer , default = 0)
    locktime = db.Column(db.Integer , default = 0)



    def __init__(self,content: dict) :
        for key, value in content.items():
            setattr(self,key,value)

    def convert_json(self):
        inf_list = ['user_id', 'username', 'password', 'rePassword',
                    'telephone', 'mail', 'date', 'avatar']
        inf_list_DETAIL = [self.user_id, self.username, self.password,
                           self.re_password, self.telephone, self.mail, self.date, self.avatar]
        user_infor = {}
        for index, key in enumerate(inf_list):
            user_infor[key] = inf_list_DETAIL[index]

        return user_infor

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    def update_to_db(self):
        db.session.update(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, user_id):
        return cls.query.filter_by(user_id=user_id).first()

    @classmethod
    def find_by_name(cls, username):
        return cls.query.filter_by(username=username).first()

    @classmethod
    def get_all_users(cls):
        return cls.query.all()
