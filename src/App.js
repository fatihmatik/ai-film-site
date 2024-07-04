import React, { useState } from "react";
import FilmDiv from "./components/FilmDiv";
import HeroBackground from "./components/HeroBackground";
import HeroFront from "./components/HeroFront";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AIComp from "./components/AIComp";
import RecommendFilms from "./components/RecommendFilms";
import MovieSelector from "./components/MovieSelector.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [recommQuery, setRecommQuery] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleRecomm = (query) => {
    setRecommQuery(query);
  };

  // Function to handle movie selection
  const handleSelectMovie = (title) => {
    setSelectedTitle(title);
  };

  return (
    <div className="pt-32">
      <NavBar onSearch={handleSearch} />

      <MovieSelector onSelectMovie={handleSelectMovie} />
      <AIComp onRecomm={handleRecomm} selectedTitle={selectedTitle} />
      <RecommendFilms recommArr={recommQuery} />
      <HeroBackground />

      <FilmDiv searchQuery={searchQuery} />
      <HeroFront />
      <Footer />
    </div>
  );
}

export default App;
