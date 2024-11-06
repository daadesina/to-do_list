from flask import Blueprint, render_template, url_for

logicBp = Blueprint('logic', __name__)



@logicBp.route('/base')
def base():
    return render_template('base.html')

@logicBp.route('/home')
def home():
    return render_template('home.html')

@logicBp.route('/todo')
def todo():
    return render_template('todo.html')

@logicBp.route('/note')
def note():
    return render_template('note.html')

@logicBp.route('/timetable')
def timetable():
    return render_template('timetable.html')

@logicBp.route('/about')
def about():
    return render_template('about.html')