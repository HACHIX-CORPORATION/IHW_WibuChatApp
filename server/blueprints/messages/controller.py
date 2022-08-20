from blueprints.messages.models import MessageModel

def get_mess_by_roomID(room_id:int):
    messes = MessageModel.get_mess_by_room_id(room_id)
    result = []

    for mess in messes:
        result.append(mess.convert_json())
    
    return result
