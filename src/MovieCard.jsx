import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movie" key={movie.imdbID}>
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
            <p>Test</p>
            <p>Test2</p>
            </div>
            <a>"A"</a>
            <a>"B"</a>
            <b>Test</b>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;
