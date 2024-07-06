import React, { useState } from "react";
import FilmDiv from "./components/FilmDiv";
import HeroBackground from "./components/HeroBackground";
import HeroFront from "./components/HeroFront";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AIComp from "./components/AIComp";
import RecommendFilms from "./components/RecommendFilms";
import MovieSelector from "./components/MovieSelector.jsx";
import FetchMovies from "./components/FetchMovies.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recommQuery, setRecommQuery] = useState([]);
  const [selectedTitleID, setSelectedTitleID] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleRecomm = (query) => {
    setRecommQuery(query);
  };

  const handleSelectMovie = (titleID) => {
    setSelectedTitleID(titleID);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pt-32">
      <FetchMovies setMovies={setMovies} />
      <NavBar onSearch={handleSearch} onSetPage={handlePageChange} />

      {currentPage === "home" && (
        <>
          <FilmDiv searchQuery={searchQuery} />
          <MovieSelector onSelectMovie={handleSelectMovie} moviesArr={movies} />
          <AIComp onRecomm={handleRecomm} selectedTitleID={selectedTitleID} />
          <RecommendFilms recommArr={recommQuery} />

          <HeroBackground />
          <HeroFront />
          <div className="w-1/2 h-[2px] bg-red-600 mx-auto mt-4"></div>
          <Footer />
        </>
      )}

      {currentPage === "about" && <Footer />}

      {currentPage === "contact" && <Contact />}
    </div>
  );
}

export default App;
