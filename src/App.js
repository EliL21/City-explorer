import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleGetLocation = () => {

  }
  render(){
    return(
      <>
      <form>
        <button onClick={this.handleGetLocation}>Explore!</button>
      </form>
      
      
      
      
      </>
    )
  }
}
export default App;
