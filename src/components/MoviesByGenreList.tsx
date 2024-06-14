import Loading from "./Loading";
import OverviewCard from "./OverviewCard";
import { useParams } from "react-router-dom";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import useAllGenres from "../hooks/useAllGenres";

const MoviesByGenreList = () => {
  const { id } = useParams<{ id: string }>();
  const genreId = Number(id);

  const {
    data: moviesByGenres,
    isLoading: isLoadingMovies,
    isError: isErrorMovies,
    error: errorMovies,
    isSuccess: isSuccessMovies,
  } = useMoviesByGenre(genreId);

  const {
    data: allGenres,
    isLoading: isLoadingGenres,
    isError: isErrorGenres,
    error: errorGenres,
    isSuccess: isSuccessGenres,
  } = useAllGenres();

  if (isLoadingMovies || isLoadingGenres) return <Loading />;
  if (isErrorMovies)
    return <p>Ett fel uppstod vid hämtning av filmer: {errorMovies.message}</p>;
  if (isErrorGenres)
    return <p>Ett fel uppstod vid hämtning av genre: {errorGenres.message}</p>;

  let currentGenre = "";
  if (isSuccessGenres) {
    const genre = allGenres.find((genre) => genre.id === genreId);
    currentGenre = genre ? genre.name : "Genre kan ej hittas";
  }

  return (
    <>
      <div>
        <h2>Genre: {currentGenre}</h2>
        {isSuccessMovies && (
          <ul className="row px-0">
            {moviesByGenres.results.map((movieByGenre) => (
              <div
                className="d-flex justify-content-center col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-2"
                key={movieByGenre.id}
              >
                <OverviewCard
                  key={movieByGenre.id}
                  id={movieByGenre.id}
                  image_url={`https://image.tmdb.org/t/p/w300${movieByGenre.poster_path}`}
                  title={movieByGenre.title}
                  rate={movieByGenre.vote_average}
                  language={movieByGenre.original_language}
                />
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MoviesByGenreList;
