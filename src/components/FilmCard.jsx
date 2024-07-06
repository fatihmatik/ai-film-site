import React from "react";

const FilmCard = ({
  title,
  genre,
  releaseYear,
  director,
  description,
  photoURL,
  onOpen,
}) => {
  return (
    <div
      className="bg-zinc-950 rounded-lg shadow-md p-4 mb-4 hover:cursor-pointer hover:-translate-y-1 transition ease-in-out 300ms"
      onClick={onOpen}
    >
      <div className="relative w-full pb-[177%] mb-4">
        <img
          src={photoURL}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <h2 className="text-lg md:text-xl font-bold mb-2">{title}</h2>
      <p className="text-white mb-1">
        <strong>Genre:</strong> {genre}
      </p>
      <p className="text-white mb-1">
        <strong>Release Year:</strong> {releaseYear}
      </p>
      <p className="text-white mb-1">
        <strong>Director:</strong> {director}
      </p>
      <p className="text-gray-100 mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
        {description}
      </p>
    </div>
  );
};
export default FilmCard;
