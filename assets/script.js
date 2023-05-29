// DEPENDENCIES

// DATA



srchBtnEl = document.getElementById("srch-btn")


// FUCNTIONS

function getApi () {
    var requestUrl = 'https://weatherapi-com.p.rapidapi.com/current.json'

    fetch(requestUrl)
    .then(function (response) {
      console.log(response)
      return response.json();
    })
}

function getWeather() {
    console.log("got the weather");
    getApi();
}


// USER INTERACTIONS

srchBtnEl.addEventListener("click", function() {
    getWeather();
})

// INITIALIZATION
