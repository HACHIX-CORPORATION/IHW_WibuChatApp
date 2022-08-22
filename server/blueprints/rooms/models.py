from app.db import db

class RoomModel(db.Model):
    __tablename__ = 'rooms'
    room_id = db.Column(db.Integer , primary_key = True)
    room_name = db.Column(db.String(256),nullable=False)

    def __init__(self,room_name):
        self.room_name = room_name

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def convert_json(self):
        return {'room_id' : self.room_id , 'room_name' : self.room_name}

    @classmethod
    def find_by_name(cls,room_name):
        return cls.query.filter_by(room_name = room_name).first()

    @classmethod
    def get_all_rooms(cls):
        return cls.query.all()
