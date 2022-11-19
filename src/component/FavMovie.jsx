import React from "react";
import Card from "./Card";

function FavMovie({ movies }) {
  return (
    <>
      <p></p>

      <div className="row  justify-content-center gap-5 justify-content-round">
        {movies.map((movie, index) => (
          <Card movie={movie} key={index} />
        ))}
        {/* <Card movie={movies[0]} /> */}
      </div>
    </>
  );
}

export default FavMovie;
