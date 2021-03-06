var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//         <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h2 className="text-center page-title">About</h2>
      <p>
        This is a weather application buildon React. I have built this for the course
      </p>
      <p>
        Here are some of the tools I used.
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
