import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function getAllFavMovie() {
  return JSON.parse(localStorage.getItem("fav"));
}
let favorite = getAllFavMovie();

export const FavoriteMovies = () => {
  const [movie, setMovie] = useState(getAllFavMovie());
  const [moviess, setMoviess] = useState();
  let moviesArray = [];
  const [reander, setRander] = useState(false);

  const fetchFavMovies = (fav) => {
    console.log(fav);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${fav}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
      )
      .then((res) => {
        // setMovie(res.data);
        moviesArray.push(res.data);
        setMoviess(moviesArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllFavMovie().forEach((id) => fetchFavMovies(id));
    console.log(moviesArray);
    setRander(true);
  }, []);

  if (reander == false) {
    return <h1>Loading</h1>;
  }
  return moviesArray.map((m) => <Card movie={m}></Card>);
};
