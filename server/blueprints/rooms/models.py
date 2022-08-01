from app.db import db

class RoomModel(db.Model):
    __tablename__ = 'rooms'
    roomID = db.Column(db.Integer , primary_key = True)
    userID = db.Column(db.Integer)

    def __init__(self,content: dict) :
        for key, value in content.items():
            setattr(self,key,value)
