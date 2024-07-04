import React, { useState } from "react";
import { Client } from "@gradio/client";

async function fetchRecommendations(title) {
  const client = await Client.connect("fatihmatic/reccom-ml");
  const result = await client.predict("/predict", { title });
  return result.data;
}

function MyComp() {
  const [title, setTitle] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchRecommendations(title);
    setRecommendations(data);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 text-black">
      <h1 className="text-2xl font-bold">Film Recommendation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a film title"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Get Recommendations
        </button>
      </form>
      {recommendations.length > 0 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Recommended Films:</h2>
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 border rounded-md bg-gray-100">
              {rec}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyComp;
