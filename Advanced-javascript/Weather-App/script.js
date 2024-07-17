function init() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        showError("Geolocation is not supported by this browser.");
    }
}

function onSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Fetch weather data using latitude and longitude
    fetchWeatherData(latitude, longitude);
}

function onError(error) {
    showError("Error getting location: " + error.message);
}

function fetchWeatherData(latitude, longitude) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            showError("Error fetching weather data: " + error.message);
        });
}

function displayWeather(data) {
    const location = data.name + ', ' + data.sys.country;
    const temperature = (data.main.temp - 273.15).toFixed(1); // Convert temperature from Kelvin to Celsius
    const weatherDescription = data.weather[0].description;

    document.getElementById('location').textContent = location;
    document.getElementById('weather-info').innerHTML = `Temperature: ${temperature}°C<br>Weather: ${weatherDescription}`;
}

function showError(message) {
    document.getElementById('location').textContent = message;
    document.getElementById('weather-info').textContent = '';
}

document.addEventListener('DOMContentLoaded', init);
