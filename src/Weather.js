import React from 'react';




class Weather extends React.Component {
  render() {
    return (
      <>
        <div>
          <h3>Weather</h3>

          {this.props.weatherData.map((day, indx) => {
            return (
        <p>{this.props.weatherday.date}</p>
        <p>{this.props.weatherday.description}</p>
            )
          })}

        </div>
      </>




    )
  }
}
export default Weather;