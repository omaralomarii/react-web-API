import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function Card({ movie }) {
  return (
    <MDBCard className="w-25">
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
        <MDBBtn href="#" style={{ backgroundColor: "black" }}>
          Button
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
