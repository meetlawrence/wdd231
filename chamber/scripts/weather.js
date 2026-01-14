// Select HTML elements
const myCity = document.querySelector('#city');
const currentTemp = document.querySelector('#current-temp');
const myHumidityDesc = document.querySelector('#humidity');
const iconContainer = document.querySelector('#icon-container');
const myDesc = document.querySelector('#desc');

//  API Configuration
const myKey = "647f73e4a3733a4a1632b09f427c8935";
const myLat = "4.9757";
const myLong = "8.3417";
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

// Fetch Data
async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error("Weather API Error:", error);
    }
}

// Display Results
function displayResults(data) {
    // Internationalization for Country Name
    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    const fullCountryName = regionNames.of(data.sys.country); 

    // Update Text (City, Temp, Humidity)
    myCity.innerHTML = `Calabar, <strong>${fullCountryName}</strong>`;

    const description = data.weather[0].description;
    myDesc.textContent = description.charAt(0).toUpperCase() + description.slice(1);

    currentTemp.innerHTML = `Temperature: ${Math.round(data.main.temp)}°C`;
    myHumidityDesc.innerHTML = `Humidity: ${data.main.humidity}%`;

    

    // Handle Icon Creation
    if (iconContainer) {
        iconContainer.innerHTML = ''; // Clear container
        
        const img = document.createElement('img');
        const iconCode = data.weather[0].icon;
        const description = data.weather[0].description;
        
        img.setAttribute('src', `https://openweathermap.org/img/wn/${iconCode}@2x.png`);
        img.setAttribute('alt', description);
        img.setAttribute('id', 'weather-icon');
        
        // Add a tooltip so users can see the description on hover
        img.setAttribute('title', description.toUpperCase());

        iconContainer.appendChild(img);
    }
}

apiFetch();