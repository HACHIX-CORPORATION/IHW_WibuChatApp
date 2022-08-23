from app.app import app
from app.db import db
from sockets.connection_socket import socketio

if __name__ == "__main__" :
    db.init_app(app)
    socketio.run(app ,  port=5000 , debug=True)