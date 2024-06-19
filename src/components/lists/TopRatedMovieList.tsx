import HorizontalListGrp from "../lists/HorizontalListGrp";
import OverviewCard from "../cards/OverviewCard";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";

const TopRatedMovieList = () => {
  const {
    data: topRatedMovies,
    isError: isErrorTopRated,
    error: errorTopRated,
    isSuccess: isSuccessTopRated,
  } = useTopRatedMovies();

  if (isErrorTopRated) {
    return <p>{errorTopRated.message}</p>;
  }

  return (
    <>
      {isSuccessTopRated && (
        <div className="container mb-5">
          <h2>Högst betygsatta filmer!</h2>
          <p className="mb-2">
            <em>
              Bläddra till höger mellan {topRatedMovies.length}st högst
              betygsatta filmer.
            </em>
          </p>
          <HorizontalListGrp>
            {topRatedMovies.map((movieTopRated) => (
              <OverviewCard
                key={movieTopRated.id}
                id={movieTopRated.id}
                image_url={`https://image.tmdb.org/t/p/w300${movieTopRated.poster_path}`}
                title={movieTopRated.title}
                rate={movieTopRated.vote_average}
                language={movieTopRated.original_language}
              />
            ))}
          </HorizontalListGrp>
        </div>
      )}
    </>
  );
};

export default TopRatedMovieList;
