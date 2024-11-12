from flask import Flask, jsonify
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/insight', methods=['GET'])
def get_chat_insight():
    file_path = r'D:\Desktop\Project Oct\HealthFront\src\result.json'
    
    try:
        with open(file_path, 'r') as file:
            chat_data = json.load(file)

        return jsonify(chat_data)

    except FileNotFoundError:
        return jsonify({'error': 'Result file not found.'}), 404
    except json.JSONDecodeError:
        return jsonify({'error': 'Invalid JSON format in the result file.'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=7000, debug=True)
