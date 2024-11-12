import os
import json
from groq import Groq
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

chat_history = []

def groq_chat(user_prompt):
    client = Groq(
        api_key='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',
    )

    chat_completion = client.chat.completions.create(
        messages=[
            {'role': 'system', 'content': "When someone asks you how are you or hello, respond with 'I am CentrixSupport' and provide mental health support."},
            {'role': 'user', 'content': user_prompt}
        ],
        model="llama3-8b-8192",
    )

    return chat_completion.choices[0].message.content

chat_history = []

@app.route('/chat', methods=['POST'])
def handle_chat():
    user_prompt = request.json['message']
    ai_response = groq_chat(user_prompt)

    chat_entry = {
        "User": user_prompt,
        "AI": ai_response
    }

    chat_history.append(chat_entry)

    return jsonify(chat_entry)

@app.route('/chat-history', methods=['GET'])
def get_chat_history():
    return jsonify(chat_history)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=7000, debug=True)