import { Pagination } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "./Caru";
import FavMovie from "./FavMovie";

// import axios from 'axios'
function Home({ movies, handlePage }) {
  return (
    <div>
      <Slider />
      <br />
      <h1
        className="mt-5 mb-5"
        style={{ fontWeight: "bold", textAlign: "center" }}
      >
        Movies
      </h1>
      <FavMovie movies={movies} />
      <div className="d-flex justify-content-center mt-5 mb-2">
        <Pagination
          count={10}
          color="secondary"
          onChange={(e, page) => {
            handlePage(page);
          }}
        />
      </div>
    </div>
  );
}

export default Home;
