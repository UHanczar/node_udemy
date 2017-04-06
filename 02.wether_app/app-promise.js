const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Adress to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.');
  }
  const lat = response.data.results[0].geometry.location.lat;
  const lon = response.data.results[0].geometry.location.lng;
  const weatherUrl = `https://api.darksky.net/forecast/1130bde1c60eef211aed30d9eb30c153/${lat},${lon}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherUrl);
}).then((response) => {
  const temperature = response.data.currently.temperature;
  const apparentTemperature = response.data.currently.temperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((error) => {
  if (error.code === 'ENOTFOUND') {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(error.message);
  }
  // console.log(error);
});
