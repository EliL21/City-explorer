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
      let lat = cityDataFromAxios.data[0].lat;
      let lon = cityDataFromAxios.data[0].lon;
      console.log(cityDataFromAxios.data[0]);
      console.log(lat, lon);
      this.setState({
        cityData: cityDataFromAxios.data[0],
      })
       
        // console.log(city.data);
        } catch (error) {
        console.log (error.errorMessage);

        }


      }
  render() {
        return(
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
        <p>{this.state.cityData.display_name}</p>
        <p>{this.state.cityData.lat}</p>
        <p>{this.state.cityData.lon}</p>
      </div>


      </>
    )
    }
}
export default App;
