const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city.trim() !== "") {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const apiKey = "aa3367f84eb27cb1731e6a193245ba0f"; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Weather: ${description}</p>`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "Error fetching weather data.";
        });
}
function fetchWeather(city) {
    const apiKey = "aa3367f84eb27cb1731e6a193245ba0f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.main && data.main.temp && data.weather && data.weather[0] && data.weather[0].description) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Weather: ${description}</p>`;
            } else {
                weatherInfo.innerHTML = "Weather data not available.";
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "Error fetching weather data.";
        });
}
