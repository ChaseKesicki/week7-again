//Start of script, make request for API
//Use data in response to make HTML elements
//For the table that shows the weather forecast

let weatherApiUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let forecastTableElement = document.querySelector('#weather-forecast')


fetch(weatherApiUrl).then(response => {
    //response is bytes of data
    //need to get response data and convert to
    //JSON - javascript objects and
    //arrays our program can use
    //return response.json() // .json built in JS method
    // returns it to where?
    let jsonProcessingPromise = response.json()

    return jsonProcessingPromise 

}).then(processedJson => {
    console.log(processedJson)
    let forecastProperties = processedJson.properties

    let forecastArray = forecastProperties.periods
    console.log(forecastArray)
    forecastArray.forEach(forecast => {
        //for every forecast period, we need a new table row
        let tableRowElement = document.createElement('tr')
        //for each piece of information, need one table data (td)
        console.log(forecast)
         let timePeriod = forecast.name
         console.log(timePeriod)
         let timePeriodTdElement = document.createElement('td')
         timePeriodTdElement.innerHTML = timePeriod

         tableRowElement.appendChild(timePeriodTdElement)

        //todo make the other td elements
        //use the temperature property for temperature
        let temperatureText = forecast.temperature
        let temperatureTdElement = document.createElement('td')
        temperatureTdElement.innerHTML = temperatureText
        tableRowElement.appendChild(temperatureTdElement)
        //use the icon property to get the URL for the icon
        //use the detailedForecast property for text description
        //use the windSpeed and windDirection for the wind forecast

        //You'll need to make a new img element and set the source to
        //the icon property's value.  See Wikipedia example from 2 weeks ago
        //Make a td to contain the img element

        forecastTableElement.appendChild(tableRowElement)
    })
})

