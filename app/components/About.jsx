var React = require('react');

// // This is with state
// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About </h3>
//     );
//   }
// });

// ****** STATELESS FUNCTIONAL COMPONENT ******
// if you just need to display and no need to store any STATE
// then you can just use the following without React.createClass
var About = (props) => {
  return (
    <h3>About </h3>
  );
};

module.exports = About;
