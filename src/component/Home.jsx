import { Pagination } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "./Caru";
import FavMovie from "./FavMovie";
// import axios from 'axios'
function Home({ movies, handlePage }) {
  return (
    <div>
      <Slider />
      <FavMovie movies={movies} />
      <Pagination
        count={10}
        color="secondary"
        onChange={(e, page) => {
          handlePage(page);
        }}
      />
    </div>
  );
}

export default Home;
