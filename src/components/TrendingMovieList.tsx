import { useQuery } from "@tanstack/react-query";
import { ListOfMovies } from "../types/clientTypes";
import { getTrendingMovies } from "../services/apiCommunication";
import Loading from "./Loading";
import HorizontalListGrp from "./HorizontalListGrp";
import OverviewCard from "./OverviewCard";

const TrendingMovieList = () => {
  const {
    data: moviesTrending,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery<ListOfMovies[]>({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });

  return (
    <>
      {isLoading && <Loading />}

      {isError && <p>{error.message}</p>}
      {isSuccess && (
        <div className="container mt-5 mb-5">
          <h2>Populära filmer</h2>
          <p className="mb-2">
            <em>
              Bläddra till höger mellan {moviesTrending.length}st populära
              filmer.
            </em>
          </p>
          <HorizontalListGrp>
            {moviesTrending.map((movieTrending) => (
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
