const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

const address = argv.address;
console.log(address);

// geocode.geocodeAddress(address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

weather.getWeather();
