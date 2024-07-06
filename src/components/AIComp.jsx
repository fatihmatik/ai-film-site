import React, { useEffect, useState } from "react";
import { Client } from "@gradio/client";
import filmData from "../assets/data/processed_movies.json"; // Import filmData to access movie titles

// Fetch recommendations based on the title
async function fetchRecommendations(title) {
  const client = await Client.connect("fatihmatic/reccom-ml");
  const result = await client.predict("/predict", { title });
  return result.data;
}

function AIComp({ onRecomm, selectedTitleID }) {
  const [recommendations, setRecommendations] = useState([]); // State for recommendations
  const [selectedTitle, setSelectedTitle] = useState(""); // State for the selected movie title

  // Fetch the movie title based on selectedTitleID and get recommendations
  useEffect(() => {
    const fetchRecommendationsData = async () => {
      if (selectedTitleID) {
        // Find the title of the movie based on the selectedTitleID
        const selectedFilm = filmData.find(
          (film) => film.id === selectedTitleID
        );
        if (selectedFilm) {
          setSelectedTitle(selectedFilm.title); // Update the selected title state

          // Fetch recommendations using the movie title
          const data = await fetchRecommendations(selectedFilm.title);
          const stringArray = data[0];
          if (stringArray === "Movie not found in the database.") {
            setRecommendations([stringArray]); // Set the error message in recommendations
          } else {
            try {
              const jsonString = stringArray.replace(/'/g, '"');
              const array = JSON.parse(jsonString); // Convert string to array
              setRecommendations(array);
            } catch (error) {
              console.error("Error parsing JSON:", error);
              setRecommendations([]); // Set empty array on error
            }
          }
        }
      }
    };

    fetchRecommendationsData(); // Fetch recommendations based on the selected title
  }, [selectedTitleID]);

  // Call onRecomm prop function with the recommendations
  useEffect(() => {
    if (onRecomm) {
      onRecomm(recommendations);
    }
  }, [recommendations, onRecomm]);

  return (
    <div className="p-4 max-w-xl mx-auto bg-black rounded-xl shadow-md space-y-4 text-white mt-2">
      <p className="text-lg">
        Recommendations for:{" "}
        <span className="font-semibold text-red-500">{selectedTitle}</span>
      </p>
    </div>
  );
}

export default AIComp;
