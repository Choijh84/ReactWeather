var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//
//     return (
//         <div>
//           <h3>It is {temp} in {location}.</h3>
//         </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
      <div>
        <h3 className="text-center">지금 현재 {location} 온도는 {temp}도입니다.</h3>
      </div>
  );
}

module.exports = WeatherMessage;
