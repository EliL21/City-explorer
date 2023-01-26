import React from 'react';




class Weather extends React.Component {
  render() {
    return (
      <>
        <div>
          <h3>Weather</h3>

          {this.props.weatherData.map((day, indx) => {
            return (
              <div key={indx}>
        <p>{day.forecast}</p>
        <p>{day.time}</p>
        </div>
            )
          })}

        </div>
      </>




    )
  }
}
export default Weather;