import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="movies">
      {movies ? (
        movies.map((movie) => {
          const { Title, Year, Poster, imdbID: id } = movie;
          return (
            <Link to={`/movies/${id}`} key={id} className="movie">
              <article>
                <img src={Poster === "N/A" ? url : Poster} alt={Title} />
                <div className="movie-info">
                  <h4 className="title">{Title} </h4>
                  <p>{Year}</p>
                </div>
              </article>
            </Link>
          );
        })
      ) : (
        <h4>enter a movie title</h4>
      )}
    </section>
  );
};

export default Movies;
