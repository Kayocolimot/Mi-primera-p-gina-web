from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Reemplaza 'TU_API_KEY' con una clave de API de clima.
# Puedes obtener una gratuita en OpenWeatherMap.
# Visita https://openweathermap.org/api
API_KEY = "c4ccb2d40ebe51a4316672a63b9a3553"

@app.route('/weather', methods=['GET'])
def get_weather():
   city = request.args.get('city')
    if not city:
        return jsonify({"error": "Falta el nombre de la ciudad"}), 400

    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
    
    response = requests.get(url)
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

if __name__ == '__main__':
    app.run(debug=True)
