import React, { useEffect, useState } from "react";
import { Client } from "@gradio/client";

// Fetch recommendations based on the title
async function fetchRecommendations(title) {
  const client = await Client.connect("fatihmatic/reccom-ml");
  const result = await client.predict("/predict", { title });
  return result.data;
}

function AIComp({ onRecomm, selectedTitle }) {
  const [recommendations, setRecommendations] = useState([]); // State for recommendations

  // Fetch recommendations whenever selectedTitle changes
  useEffect(() => {
    const fetchRecommendationsData = async () => {
      if (selectedTitle) {
        const data = await fetchRecommendations(selectedTitle);
        console.log(data);
        const stringArray = data[0];
        if (stringArray === "Movie not found in the database.") {
          setRecommendations([stringArray]); // Set the error message in recommendations
        } else {
          const array = JSON.parse(stringArray.replace(/'/g, '"')); // Convert string to array
          setRecommendations(array);
        }
      }
    };

    fetchRecommendationsData(); // Fetch recommendations based on the selected title
  }, [selectedTitle]);

  // Call onRecomm prop function with the recommendations
  useEffect(() => {
    if (onRecomm) {
      onRecomm(recommendations);
    }
  }, [recommendations, onRecomm]);

  return (
    <div className="p-4 max-w-md mx-auto bg-black rounded-xl shadow-md space-y-4 text-white mt-2">
      <p className="text-lg">
        Recommendations for:{" "}
        <span className="font-semibold text-red-500">{selectedTitle}</span>
      </p>
    </div>
  );
}

export default AIComp;
