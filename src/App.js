import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/Nav";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import { Footer } from "./component/Footer";
import Contact from "./component/Contact";
import SignInSide from "./component/Register";
import Signin from "./component/Login";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { AuthProvider } from "react-auth-kit";
import { useSignIn } from "react-auth-kit";
import { MovieDetails } from "./component/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const API_SEARCH =
    `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=` +
    query;

  // console.log(typeof query);
  const fetchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchSearchMovies = () => {
    axios
      .get(API_SEARCH)
      .then((res) => {
        console.log(res);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelSearch = (value) => {
    setQuery(value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    fetchSearchMovies();
  };
  function handlePage(page) {
    console.log(page);
    setPage(page);
  }
  useEffect(() => {
    fetchMovies();
  }, [page]);

  if (movies.length == 0) {
    return <Spinner animation="border" size="lg" />;
  }
  return (
    <>
      <AuthProvider authType={"cookie"} authName={"_auth"}>
        <NavBar handelSearch={handelSearch} handelSubmit={handelSubmit} />

        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} handlePage={handlePage} />}
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<SignInSide />} />
          <Route path="login" element={<Signin />} />
          <Route path="movie/:id" element={<MovieDetails />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
