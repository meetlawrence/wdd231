const forecastKey = "647f73e4a3733a4a1632b09f427c8935";
const lat = "4.9757";
const lon = "8.3417";

// Note the endpoint is "forecast" not "weather"
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${forecastKey}&units=metric`;

async function getForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Forecast error:", error);
    }
}

function displayForecast(data) {
    // Select the div inside third card
    const forecastContainer = document.querySelector('.card3 .card-inside'); 
    
    // Clear it out first
    forecastContainer.innerHTML = "";

    // This Filters to get midday (12:00) for the next 3 days
    // We filter by dt_txt and take indices to ensure we get distinct days.
    // I learnt this from the internet
    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

    dailyData.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(day.main.temp);
        const icon = day.weather[0].icon;
        const desc = day.weather[0].description;

        // This Creates the forecast row
        const html = `
            <div class="forecast-row">
                <span class="forecast-day">${dayName}</span>
                <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
                <span class="forecast-temp">${temp}°C</span>
            </div>
            <hr>
        `;
        forecastContainer.innerHTML += html;
    });
}

getForecast();