import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

import { Badge } from "react-bootstrap";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState();
  const fetchFavMovies = (fav) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${fav}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US`
      )
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchFavMovies(param.id);
    console.log(param);
  }, []);
  if (movie == null) {
    return <h1>Loading</h1>;
  }
  return (
    <MDBContainer>
      <div style={{ maxWidth: "85%" }} className="mx-auto py-5">
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src={API_IMG + movie.poster_path}
              alt="..."
              fluid
              className="rounded"
            />
          </MDBCol>
          <MDBCol md="7">
            <MDBCardBody className="px-5 py-5 d-flex flex-column justify-content-between">
              <MDBCardTitle className="h1 mb-3"></MDBCardTitle>
              <MDBCardText>
                <div className="mb-4 ">
                  <h4>{movie.title}</h4>
                  <h5 className="mb-3 ">budget : {movie.budget} $ </h5>
                  <p className="mb-3">
                    genres :
                    {movie.genres.map((g) => {
                      return g.name + ", ";
                    })}
                  </p>
                  <p className="mb-3">
                    <a href={movie.homepage}>homepage</a>
                  </p>
                  <p>overview {movie.overview}</p>
                  <p> release date: {movie.release_date}</p>
                  <p>revenue : {movie.revenue} $</p>
                  <p>runtime : {movie.runtime} </p>
                </div>

                <small className="text-muted">
                  Health Labels <br />{" "}
                </small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="1">
            <MDBIcon
              far
              icon="heart"
              className="h1"
              style={{ cursor: "pointer" }}
              onClick={() => {}}
            />
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
};
