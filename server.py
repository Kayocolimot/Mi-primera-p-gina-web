from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

# Reemplaza 'TU_API_KEY' con una clave de API de clima
API_KEY = "c4ccb2d40ebe51a4316672a"

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({"error": "Falta el nombre de la ciudad"}), 400

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

    try:
        response = requests.get(url)
        response.raise_for_status() # Lanza un error para códigos de estado 4xx/5xx

        data = response.json()

        if data.get("cod") == 200:
            temperatura = data["main"]["temp"]
            descripcion = data["weather"][0]["description"]
            return jsonify({
                "city": city,
                "temperature": temperatura,
                "description": descripcion
            })
        else:
            return jsonify({"error": "Ciudad no encontrada"}), 404
    except requests.exceptions.RequestException as e:
        return jsonify({"error": f"Error de conexión: {e}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
