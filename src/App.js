import React, { useState } from "react";
import FilmDiv from "./components/FilmDiv";
import HeroBackground from "./components/HeroBackground";
import HeroFront from "./components/HeroFront";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MyComp from "./components/MyComp";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="pt-32">
      <MyComp />
      <NavBar onSearch={handleSearch} />
      <HeroBackground />
      <FilmDiv searchQuery={searchQuery} />
      <HeroFront />
      <Footer />
    </div>
  );
}

export default App;
