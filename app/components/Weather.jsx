var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm= require('WeatherForm');
var openWeatherMap= require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function () {
    return {
      city: '',
      message: ''
    };
  },
  getInitialState: function () {
    return {
      // city: this.props.city,
      // message: this.props.message
      isLoading: false
    };
  },
  handleNewWeather: function (city) {
      var that = this;

      // debugger;
      this.setState({isLoading: true});

      console.log('city is ... '+city);

      openWeatherMap.getTemp(city).then(function (temp) {
        that.setState({
          city: city,
          message: 'The weather at ' + city + ' is ' + temp + ' degree celcius',
          isLoading: false
        });
      }, function (errorMessage) {
        that.setState({
          city: city,
          message: 'Weather is not found in ' + city,
          isLoading: false
        });
      });
  },
  render: function () {
    var {city, message, isLoading} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (city && message) {
        return <WeatherMessage message={message}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewWeather={this.handleNewWeather}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
