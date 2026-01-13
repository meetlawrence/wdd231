// This selects HTML element in the document
const myCity = document.querySelector('#city');
const myCountry = document.querySelector('#country');
const myDesc = document.querySelector('#desc'); 
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const myHumidityDesc = document.querySelector('#humidity');
// const myPressure = document.querySelector('#pressure');

// THIS CREATES REQUIRED VARIABLES FOR THE URL
const myKey = "647f73e4a3733a4a1632b09f427c8935"
const myLat = "4.9757"
const myLong = "8.3417"

// This constructs a full path using the default format
// const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid={647f73e4a3733a4a1632b09f427c8935}'

// This constructs a full path using template literals
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

// Try to grab the current weather data
async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

// Display the json data onto my webpage
function displayResults(data) {
    // console.log("hello") //this was to test whether the console is functioning properly
    // myCity.innerHTML = data.name
    
    // This create the translator toll
    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

    // This converts the code (NG) into the full name (Nigeria)
    const fullCountryName = regionNames.of(data.sys.country); 

    // This combines the city and country names together
    myCity.innerHTML = `Calabar, ${fullCountryName}`;

    // This generates the description and weather information
    myDesc.innerHTML = data.weather[0].description
    currentTemp.innerHTML = `Temperature: ${data.main.temp}&deg;C`
    myHumidityDesc.innerHTML = `Humidity: ${data.main.humidity}%`
    // myPressure.innerHTML = data.main.pressure

    // This manipulates the weather icon
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)
}


// Start the process
apiFetch();