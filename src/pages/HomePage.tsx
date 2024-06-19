import { Container } from "react-bootstrap";
import CinemaMovieList from "../components/lists/CinemaMovieList";
import TopRatedMovieList from "../components/lists/TopRatedMovieList";
import TrendingMovieList from "../components/lists/TrendingMovieList";
import Hero from "../components/Hero";
import useCinemaMovies from "../hooks/useCinemaMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Loading from "../components/Loading";

const HomePage: React.FC = () => {
  const { isLoading: isLoadingCinema } = useCinemaMovies();
  const { isLoading: isLoadingTrending } = useTrendingMovies();
  const { isLoading: isLoadingTopRated } = useTopRatedMovies();

  const isLoading = isLoadingCinema || isLoadingTrending || isLoadingTopRated;

  return (
    <>
      <Hero />
      <Container className="pb-5">
        {isLoading && <Loading />}
        <CinemaMovieList />
        <TrendingMovieList />
        <TopRatedMovieList />
      </Container>
    </>
  );
};

export default HomePage;
