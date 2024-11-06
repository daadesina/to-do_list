from flask import Flask, Blueprint, render_template, url_for
from logic import logicBp

app = Flask(__name__)
app.register_blueprint(logicBp)


if __name__ == '__main__':
    app.run(debug=True)
