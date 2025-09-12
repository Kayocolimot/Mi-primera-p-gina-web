document.getElementById('getWeatherButton').addEventListener('click', function() {
    const ciudad = document.getElementById('city').value;
    fetch(`http://127.0.0.1:5000/weather?city=${ciudad}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('cityName').textContent = 'Error';
                document.getElementById('temperature').textContent = data.error;
                document.getElementById('description').textContent = '';
            } else {
                document.getElementById('cityName').textContent = data.city;
                document.getElementById('temperature').textContent = `${data.temperature}°C`;
                document.getElementById('description').textContent = data.description;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('cityName').textContent = 'Error de conexión';
            document.getElementById('temperature').textContent = 'No se pudo conectar al servidor';
            document.getElementById('description').textContent = '';
        });
});
