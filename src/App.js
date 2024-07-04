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

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recommQuery, setRecommQuery] = useState([]);
  const [selectedTitleID, setSelectedTitleID] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleRecomm = (query) => {
    setRecommQuery(query);
  };

  // Function to handle movie selection
  const handleSelectMovie = (titleID) => {
    setSelectedTitleID(titleID);
  };

  return (
    <div className="pt-32">
      <FetchMovies setMovies={setMovies} />
      <NavBar onSearch={handleSearch} />

      <FilmDiv searchQuery={searchQuery} />

      <MovieSelector onSelectMovie={handleSelectMovie} moviesArr={movies} />
      <AIComp onRecomm={handleRecomm} selectedTitleID={selectedTitleID} />
      <RecommendFilms recommArr={recommQuery} />
      <HeroBackground />
      <HeroFront />
      <Footer />
    </div>
  );
}

export default App;
