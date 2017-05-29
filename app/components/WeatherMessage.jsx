var React = require('react');

var WeatherMessage = ({message}) => {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
