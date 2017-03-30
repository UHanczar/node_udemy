const request = require('request');

const getWeather = () => {
  return request({
    url: "https://api.darksky.net/forecast/1130bde1c60eef211aed30d9eb30c153/52.4411761,30.9878462",
    json: true
  }, (error, responce, body) => {
    if (!error && responce.statusCode === 200) {
      console.log(body.currently.temperature);
    } else if (responce.statusCode === 404) {
      console.log('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
