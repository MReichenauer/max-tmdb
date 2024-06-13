import Loading from "./Loading";
import HorizontalListGrp from "./HorizontalListGrp";
import OverviewCard from "./OverviewCard";
import useTrendingMovies from "../hooks/useTrendingMovies";

const TrendingMovieList = () => {
  const {
    data: trendingMovies,
    isLoading: isLoadingTrending,
    isError: isErrorTrending,
    error: errorTrending,
    isSuccess: isSuccessTrending,
  } = useTrendingMovies();

  if (isLoadingTrending) {
    return <Loading />;
  }

  if (isErrorTrending) {
    return <p>{errorTrending.message}</p>;
  }
  return (
    <>
      {isSuccessTrending && (
        <div className="container mt-5 mb-5">
          <h2>Populära filmer</h2>
          <p className="mb-2">
            <em>
              Bläddra till höger mellan {trendingMovies.length}st populära
              filmer.
            </em>
          </p>
          <HorizontalListGrp>
            {trendingMovies.map((movieTrending) => (
              <OverviewCard
                key={movieTrending.id}
                id={movieTrending.id}
                image_url={`https://image.tmdb.org/t/p/w300${movieTrending.poster_path}`}
                title={movieTrending.title}
                rate={movieTrending.vote_average}
                language={movieTrending.original_language}
              />
            ))}
          </HorizontalListGrp>
        </div>
      )}
    </>
  );
};

export default TrendingMovieList;
