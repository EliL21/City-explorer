import React from "react";


class Movies extends React.Component {
  render(){
    return(
      <>
        <title> Movies</title>

        {this.props.movieData.map((movie, indx) => {
          return(
            <div key={indx}>

           <p>{movie.title}</p> 
           <p>{movie.overview}</p> 
            
            </div>
          )
        })}
      </>
    )
  }
}


export default Movies;
