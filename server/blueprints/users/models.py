from app.db import db

class UserModel(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer , primary_key = True)
    username = db.Column(db.String(40))
    password = db.Column(db.String(40))
    rePassword = db.Column(db.String(40))
    telephone = db.Column(db.String(40))
    mail = db.Column(db.String(40))
    date = db.Column(db.DateTime)
    avatar = db.Column(db.String(40))

    
    def __init__(self , username ,password,rePassword,telephone,mail,date,avatar):
        self.username = username
        self.password = password
        self.rePassword = rePassword
        self.telephone = telephone
        self.mail = mail
        self.date = date
        self.avatar = avatar
      
    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls , id):
        return cls.query.filter_by(id = id).first() #select * from users where id = id

    @classmethod
    def find_by_name(cls, username):
        return cls.query.filter_by(username = username).first() 
        #select * from users where username = username