// DEPENDENCIES

// DATA

var srchBtnEl = document.getElementById("srch-btn")
var srchInputEl = document.querySelector("#city-srch")

var lat;
var lon;

var today = dayjs().format("ddd MMM D, YYYY")

// FUCNTIONS

function getWeatherApi () {
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + srchInputEl.value + "&appid=" + apiKey + "&units=imperial"

    fetch(requestUrl)
    .then(function (response) {
      console.log(response)
      return response.json();
    })
    // now grabbing current weather API
    .then(function (data) {
        console.log(data)
        document.getElementById("city-name").textContent = data.name + " (" + today + ") ";
        document.getElementById("city-temp").textContent = "Temp: " + data.main.temp + " F\xB0";
        document.getElementById("city-wind").textContent = "Wind: " + data.wind.speed + " MPH";
        document.getElementById("city-humid").textContent = "Humid: " + data.main.humidity + "%";
        lon = data.coord.lon;
        lat = data.coord.lat;
        // now grabbing forecast API
        var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial";

        fetch(requestUrl)
        .then(function (response) {
          console.log(response)
          return response.json();
        })
        .then(function (data) {
            var dayElIndex = 1
            console.log(data)
            for (i = 5; i < 39; i+=8) {
                document.getElementById("day-"+ dayElIndex + "-date").textContent = data.list[i].dt_txt.slice(0, 10);
                document.getElementById("day-"+ dayElIndex + "-temp").textContent = "Temp: " + data.list[i].main.temp + " F\xB0"

            }
          })
      })
}

// USER INTERACTIONS

srchBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    getWeatherApi();
})

// INITIALIZATION
