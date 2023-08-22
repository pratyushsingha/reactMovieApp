import React from 'react';

const MovieCard = ({ movie }) => {
    return (
        <div className="max-w-sm flex flex-col justify-center items-center rounded overflow-hidden shadow-lg">
            <img className="w-2/3 rounded-md cursor-pointer" src={movie.Poster === 'N/A' ? "https://m.media-amazon.com/images/M/MV5BMGVlNzExMTctMGM5My00YmRlLTk2YWMtN2EzMDFhMmVkYWMyXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg" : movie.Poster} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-yellow-500 mb-2 hover:text-green-500">{movie.Title}({movie.Year})</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 w-full rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{movie.Type}</span>
            </div>
        </div>
    );
};

export default MovieCard;
