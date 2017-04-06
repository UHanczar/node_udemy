const request = require('request');

const geocodeAdress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, responce, body) => {
      if (error) {
        reject('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('Unable to connect to Google servers.');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAdress('Gomel').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
