const request = require('request');

request('https://api.darksky.net/forecast/dd99484e9987befc5af779e47abe4908/52.370216,4.895168?units=si', { 
    json: true }, (err, res, body) => {

        let icon = `${body.currently.icon};` 
        let humidity = `${body.currently.humidity}` 
        let temperature = `${body.currently.temperature}`
            
            if (err) { 
                return console.log(err); 
            } 
            else if(icon == 'clear-night' || 'clear-day'){ 
                console.log('category: more open to romance')
            }
            else if(icon == 'clear-day' && humidity > 0.5){ 
                console.log('category: less sharp, tired, irritable')
            }
            else if(temperature > 27 && humidity > 0.5){ //what defines high temp and humide?
                console.log('category: frustration')
            } 
            else if(icon == 'rain' || 'sleet' || 'wind' || 'fog'){ 
                console.log('category: nasty weather, rain = hunger')
            }
            else if(icon == 'cloudy' || 'partly-cloudy-day' || 'partly-cloudy-night'){ // in between
                console.log('category: cloudy, in between weather?') //here we wwant to show specific categories, or link description keywords? - ex. christmas for snow.
            }
            else {
                console.log('category: it is snowing - happy? for me atleast :D') 
            }
    }) 
// Humidity + sunny === less sharp, tired, irratable;  X
// high temperatures == anger/frustration; X
// darkness === sadness; 
// rain === hunger; 
// sunny days === more open to romance 


// assign keywords to categories
//key-words:
// xclear-day, xclear-night, rain, xsnow, xsleet, xwind, xfog, xcloudy,
// xpartly-cloudy-day, xpartly-cloudy-night. 
