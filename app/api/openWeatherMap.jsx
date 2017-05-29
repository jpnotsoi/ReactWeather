var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=849b3f112ad69fdecef22c9dac68573f';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);

    // when using the backtick ``,
    // you can inject var into string using ${} syntax
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    console.log(requestUrl);

    return axios.get(requestUrl).then(function (response) {
      if (response.data.count === 0) {
        // Do error checking
        // check if cod and message exist or not
        throw new Error('Weather not found');
      } else {
        return response.data.list[0].main.temp;
      }
    }, function (response) {
      throw new Error(response.data.message);
    });
  }
}
