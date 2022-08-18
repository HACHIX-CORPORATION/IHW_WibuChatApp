from sqlalchemy import  Column,Integer, MetaData, Table , String, create_engine


engine = create_engine('sqlite:///data.sqlite')


metadata = MetaData()

users = Table('users' , metadata,
    Column('user_id' , Integer ,  primary_key = True),
    Column('username' , String(256)),
    Column('password' , String(256)),
    Column('re_password' , String(256)),
    Column('telephone' , String(256)),
    Column('mail' , String(256)),
    Column('date' , String(256)),
    Column('avatar' , String(256)),
    Column('count', Integer),
    Column('locktime', Integer) 
)

messages = Table('messages' , metadata ,
    Column('message_id' , Integer , primary_key = True),
    Column('room_id' , Integer),  
    Column('user_id', Integer),
    Column('message', String)
)

rooms = Table('rooms' , metadata,
    Column('room_id' , Integer , primary_key = True),
    Column('room_name' , String(256))
)


metadata.create_all(engine)