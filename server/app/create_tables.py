from sqlalchemy import  Column, DateTime, Integer, MetaData, Table , String, create_engine , Text

engine = create_engine('sqlite:///data.sqlite')


metadata = MetaData()

users = Table('users' , metadata,
    Column('userID' , Integer ,  primary_key = True),
    Column('username' , String(40)),
    Column('password' , String(40)),
    Column('rePassword' , String(40)),
    Column('telephone' , String(40)),
    Column('mail' , String(40)),
    Column('date' , String(40)),
    Column('avatar' , String(40)),
    Column('count', Integer),
    Column('locktime', Integer) 
)

messages = Table('messages' , metadata ,
    Column('messageID' , Integer , primary_key = True),
    Column('roomID' , Integer),  
    Column('userID', Integer),
    Column('message', String)
)

rooms = Table('rooms' , metadata,
    Column('roomID' , Integer , primary_key = True),
    Column('userID' , Integer)
)






metadata.create_all(engine)