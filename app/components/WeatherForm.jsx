var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    e.preventDefault();

    var city = capitalizeFirstLetter(this.refs.city.value);

    if (city.length > 0){
      this.props.onNewWeather(city);
      this.refs.city.value = '';
    } else {
      this.props.onNewWeather(undefined);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="city" placeholder="city"/>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
