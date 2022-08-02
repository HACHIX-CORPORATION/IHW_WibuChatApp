import os
from flask import Flask, redirect, render_template,request
from flask_restful import Api
# from blueprints.users.route import user_master
from blueprints.users.route import user_master



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS-'] = False




api = Api(app)

app.config['SECRET_KEY'] = "12345678"


app.register_blueprint(user_master)



# @app.route('/register', methods=['GET','POST'])
# def submit():
#     form = MyForm()
#     if form.validate_on_submit():
#         user=UserModel(request.form['username'],request.form['password'])
#         user.save_to_db()
#         return redirect('/success')
#     return render_template('submit.html',form=form)
    

# @app.route('/success')
# def success():
#     return render_template('success.html')

