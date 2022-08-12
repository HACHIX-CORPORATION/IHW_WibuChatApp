from flask import request
from blueprints.rooms.models import RoomModel
from app.db import db
def create_table():
    try:
        data = request.form.get('roomName')
        if RoomModel.find_by_name(data):
            raise ValueError("The room already exitis")

        room = RoomModel(data)
        room.save_to_db()
    except Exception as ex:
        db.session.rollback()
        raise ex
    finally:
        db.session.close()