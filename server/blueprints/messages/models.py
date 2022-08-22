from app.db import db

class MessageModel(db.Model):
    __tablename__ = 'messages'
    message_id = db.Column(db.Integer , primary_key = True)
    room_id = db.Column(db.Integer)
    user_id = db.Column(db.Integer)
    message = db.Column(db.String)
    
    def __init__(self,room_id,user_id,message):
        self.room_id = room_id
        self.user_id = user_id
        self.message = message
        

    # def __init__(self,content : dict):
    #     for key, value in content.items():
    #         setattr(self,key,value)

    def convert_json(self):
        inf_list = ['message_id', 'room_id' ,'user_id', 'message']
        inf_list_DETAIL = [self.message_id, self.room_id ,self.user_id, self.message]
                    
        mess_infor = {}
        for index, key in enumerate(inf_list):
            mess_infor[key] = inf_list_DETAIL[index]

        return mess_infor

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_mess_by_room_id(cls,room_id):
        return cls.query.filter_by(room_id = room_id).all()