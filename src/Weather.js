import React from 'react';




class Weather extends React.Component {
  render() {
    return (
      <>
        <div>
          <h3>Weather</h3>

          {this.props.weatherData.map((day, indx) => {
            return (
              <>
        <p>{day.datetime}</p>
        <p>{day.weather.description}</p>
        </>
            )
          })}

        </div>
      </>




    )
  }
}
export default Weather;