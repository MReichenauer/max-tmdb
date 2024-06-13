import Loading from "./Loading";
import HorizontalListGrp from "./HorizontalListGrp";
import OverviewCard from "./OverviewCard";
import useCinemaMovies from "../hooks/useCinemaMovies";

const CinemaMovieList = () => {
  const {
    data: cinemaMovies,
    isLoading: isLoadingCinema,
    isError: isErrorCinema,
    error: errorCinema,
    isSuccess: isSuccessCinema,
  } = useCinemaMovies();

  if (isLoadingCinema) {
    return <Loading />;
  }

  if (isErrorCinema) {
    return <p>{errorCinema.message}</p>;
  }

  return (
    <>
      {isSuccessCinema && (
        <div className="container mt-5">
          <h2>På bio just nu!</h2>
          <p className="mb-2">
            <em>
              Bläddra till höger mellan {cinemaMovies.length}st aktuella filmer.
            </em>
          </p>
          <HorizontalListGrp>
            {cinemaMovies.map((movieCinema) => (
              <OverviewCard
                key={movieCinema.id}
                id={movieCinema.id}
                image_url={`https://image.tmdb.org/t/p/w300${movieCinema.poster_path}`}
                title={movieCinema.title}
                rate={movieCinema.vote_average}
                language={movieCinema.original_language}
              />
            ))}
          </HorizontalListGrp>
        </div>
      )}
    </>
  );
};

export default CinemaMovieList;
