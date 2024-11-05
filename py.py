from flask import Flask, render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///scores.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Model for scores
class Score(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    score = db.Column(db.Integer, nullable=False)

# Create the database and the db table
with app.app_context():
    db.create_all()

# Route to serve the HTML file
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint to submit score
@app.route('/submit_score', methods=['POST'])
def submit_score():
    data = request.get_json()
    score = data.get("score")
    if score is not None:
        new_score = Score(score=score)
        db.session.add(new_score)
        db.session.commit()
        return jsonify({"message": "Score submitted!", "score": score}), 200
    return jsonify({"message": "No score provided."}), 400

# API endpoint to get scores
@app.route('/get_scores', methods=['GET'])
def get_scores():
    scores = Score.query.order_by(Score.score.desc()).all()
    sorted_scores = [s.score for s in scores]
    return jsonify(sorted_scores), 200

if __name__ == "__main__":
    app.run(debug=True)
