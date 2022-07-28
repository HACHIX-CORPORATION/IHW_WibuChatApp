from sqlalchemy import  Column, DateTime, Integer, MetaData, Table , String, create_engine

engine = create_engine('sqlite:///data.sqlite')


metadata = MetaData()

users = Table('users' , metadata,
    Column('id' , Integer ,  primary_key = True),
    Column('username' , String(40)),
    Column('password' , String(40)),
    Column('rePassword' , String(40)),
    Column('telephone' , String(40)),
    Column('mail' , String(40)),
    Column('date' , String(40)),
    Column('avatar' , String(40)),
)

metadata.create_all(engine)