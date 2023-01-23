import React from "react";


class Movies extends React.Component {
  render(){
    return(
      <>
        <title> Movies</title>

        {this.props.movieData.map((movie, indx) => {
          return(
            <>
            {movie.title}
            {movie.overview}
            
            </>
          )
        })}
      </>
    )
  }
}


export default Movies;
