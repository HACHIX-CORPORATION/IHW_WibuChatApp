from app.app import app
from app.db import db
from sockets.connection_socket import socketio

if __name__ == "__main__" :
    db.init_app(app)
    socketio.run(app , host='0.0.0.0' , port=5000 , debug=True)