from app.db import db

class MessageModel(db.Model):
    __tablename__ = 'messages'
    messageID = db.Column(db.Integer , primary_key = True)
    roomID = db.Column(db.Integer),
    userID = db.Column(db.Integer),
    message = db.Column(db.String)

    def __init__(self,content : dict):
        for key, value in content.items():
            setattr(self,key,value)