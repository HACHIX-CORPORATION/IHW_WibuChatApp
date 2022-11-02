from app.db import db

class MessageModel(db.Model):
    __tablename__ = 'messages'
    message_id = db.Column(db.Integer , primary_key = True)
    room_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)
    message = db.Column(db.String)

        return mess_infor

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_mess_by_room_id(cls,room_id):
        return cls.query.filter_by(room_id = room_id).all()