from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()
api_key =os.getenv("OPENAI_API_KEY")

app=Flask(__name__)
CORS(app)

@app.route("/api/test")
def test():
    return jsonify({"message":"Backend is working"})

if __name__=="__main__":
    app.run(debug=True)