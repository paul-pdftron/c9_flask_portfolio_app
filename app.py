from flask import Flask, render_template, redirect, url_for
import os

app = Flask(__name__)

@app.route("/")
def home():
  return render_template("index.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/forgotpassword")
def forgotpassword():
    return render_template("forgot-password.html")

@app.route("/register")
def register():
    return render_template("register.html")

@app.route("/tryitnowpg")
def tryitnowpg():
    return render_template("tryitnow.html")

@app.route('/whatiscodercats')
def whatiscodercats():
    return redirect(url_for('home',_anchor='whatiscodercats'))

@app.route('/howitworks')
def howitworks():
    return redirect(url_for('home',_anchor='howitworks'))

@app.route('/tryitnow')
def tryitnow():
    return redirect(url_for('home',_anchor='tryitnow'))

@app.route('/contact')
def contact():
    return redirect(url_for('home',_anchor='contact'))


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")



from datetime import datetime
@app.context_processor
def inject_now():
    return {'now': datetime.utcnow()}


app.run(host=os.getenv('IP', '0.0.0.0'), port = int(os.getenv('PORT', 8080)))

if __name__ == '__main__':
	app.run(debug=False)
#app.run(debug=True)
