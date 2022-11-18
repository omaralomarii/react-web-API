import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import { MdFavorite } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function getFavMovie() {
  return JSON.parse(localStorage.getItem("fav"));
}

let favMovie = [];
function setFavMovie(movieID) {
  if (getFavMovie()) {
    favMovie = getFavMovie();
  }
  favMovie.push(movieID);
  return localStorage.setItem("fav", JSON.stringify(favMovie));
}
export default function Card({ movie }) {
  const naviget = useNavigate();
  return (
    <MDBCard className="w-25" onClick={(e) => naviget(`/movie/${movie.id}`)}>
      <MDBCardImage
        src={API_IMG + movie.poster_path}
        position="top"
        alt="..."
      />
      <MDBCardBody>
        <MDBCardTitle>
          <b>{movie.title}</b>
        </MDBCardTitle>
        <MDBCardText>Rating : {movie.vote_average}</MDBCardText>
        <MdFavorite
          style={{ color: "red", fontSize: "24px" }}
          onClick={(e) => {
            console.log(setFavMovie(movie.id));
          }}
        >
          Add to Fav
        </MdFavorite>
      </MDBCardBody>
    </MDBCard>
  );
}
