import { useQuery } from "@tanstack/react-query";
import { ListOfMovies } from "../types/clientTypes";
import { getTopRatedMovies } from "../services/apiCommunication";
import Loading from "./Loading";
import HorizontalListGrp from "./HorizontalListGrp";
import OverviewCard from "./OverviewCard";

const TopRatedMovieList = () => {
  const {
    data: moviesTopRated,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery<ListOfMovies[]>({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
  });

  return (
    <>
      {isLoading && <Loading />}

      {isError && <p>{error.message}</p>}
      {isSuccess && (
        <div className="container mb-5">
          <h2>Högst betygsatta filmer!</h2>
          <p className="mb-2">
            <em>
              Bläddra till höger mellan {moviesTopRated.length}st högst
              betygsatta filmer.
            </em>
          </p>
          <HorizontalListGrp>
            {moviesTopRated.map((movieTopRated) => (
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
