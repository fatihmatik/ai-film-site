import React, { useEffect } from "react";

const FetchMovies = ({ setMovies }) => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/ai-film-site/processed_movies.json"); // Adjust the path if necessary
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };

    fetchMovies();
  }, []);

  return <></>;
};

export default FetchMovies;
