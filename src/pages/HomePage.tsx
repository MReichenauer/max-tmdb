import CinemaMovieList from "../components/CinemaMovieList";
import TopRatedMovieList from "../components/TopRatedMovieList";
import TrendingMovieList from "../components/TrendingMovieList";

const HomePage: React.FC = () => {
  return (
    <>
      <CinemaMovieList />
      <TrendingMovieList />
      <TopRatedMovieList />
    </>
  );
};

export default HomePage;
