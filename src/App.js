import React from 'react';
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }


  cityData = async (e) => {
    e.preventDefault();
    

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json&limit=1`;
    try {

      let cityDataFromAxios = await axios.get(url)
      console.log(cityDataFromAxios);
      this.setState({
        cityData: cityDataFromAxios.data[0],

        cityMap: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${cityDataFromAxios[0].lat},${cityDataFromAxios[0].lon}&zoom=10`
      });
      // console.log(city.data);
    } catch (error) {


    }


  }
  render() {
    return (
      <>
        <div>
          <h1>CITY Explore</h1>

          <form onSubmit={this.cityData}>
            <label htmlFor="">Pick a City!</label>
            <input type="text" id="city" name="city" onInput={this.handleInput} />
            <button type="submit">Explore!</button>
          </form>
          {/* <Card>





          </Card> */}
          {/* <p>{this.state.locationData[0].display_name}</p> */}
        </div>


      </>
    )
  }
}
export default App;
