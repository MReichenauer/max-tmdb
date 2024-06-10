import CinemaMovieList from "../components/CinemaMovieList";
import TrendingMovieList from "../components/TrendingMovieList";

const HomePage: React.FC = () => {
  return (
    <>
      <CinemaMovieList />
      <TrendingMovieList />
    </>
  );
};

export default HomePage;
