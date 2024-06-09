import { useQuery } from "@tanstack/react-query";
import HorizontalListGrp from "../components/HorizontalListGrp";
import OverviewCard from "../components/OverviewCard";
import { getCinemaMovies } from "../services/apiCommunication";
import Loading from "../components/Loading";
import { ListOfMovies } from "../types/clientTypes";

const HomePage: React.FC = () => {
  const {
    data: moviesCinema,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery<ListOfMovies[]>({
    queryKey: ["cinemaMovies"],
    queryFn: getCinemaMovies,
  });

  return (
    <>
      {isLoading && <Loading />}

      {isError && <p>{error.message}</p>}
      {isSuccess && (
        <div className="container">
          <h2>På bio just nu!</h2>
          <p className="mb-2">
            <em>
              Bläddra till höger mellan {moviesCinema.length}st aktuella filmer.
            </em>
          </p>
          <HorizontalListGrp>
            {moviesCinema.map((movieCinema) => (
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

export default HomePage;
