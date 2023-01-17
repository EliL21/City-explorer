import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      locationData: []
    }
  }

  handleInput = (e) => {
    this.setState({
      location: e.target.value
    })
  }
  locationData = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.location}`;
    try {
      let location = await axios.get(url)
      
      this.setState({
        locationData: location.data
      })
      // console.log(location.data);
    } catch(error){

    }

   
  }
  render() {
    return (
      <>
        <div>
          <h1>CITY Explore</h1>

          <form onSubmit={this.locationData}>
            <label htmlFor="">Pick a City!</label>
            <input type="text" onInput={this.handleInput} />
            <button type="submit">Explore!</button>
          </form>
          <p></p>
        </div>


      </>
    )
  }
}
export default App;
