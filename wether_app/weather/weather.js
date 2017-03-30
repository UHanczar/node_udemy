const request = require('request');

const getWeather = (latitude, longitude, callback) => {
  return request({
    url: `https://api.darksky.net/forecast/1130bde1c60eef211aed30d9eb30c153/${latitude},${longitude}`,
    json: true
  }, (error, responce, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (responce.statusCode === 404) {
      callback('Unable to fetch weather');
    } else if (!error && responce.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature, apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
