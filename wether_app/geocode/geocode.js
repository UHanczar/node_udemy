const request = require('request');

const geocodeAddress = (address, callback) => {
  const encodedAddress = encodeURIComponent(address);
  return request({
    url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, responce, body) => {
    if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

// 1130bde1c60eef211aed30d9eb30c153

module.exports.geocodeAddress = geocodeAddress;
