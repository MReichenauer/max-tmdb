import { Container } from "react-bootstrap";
import CinemaMovieList from "../components/CinemaMovieList";
import TopRatedMovieList from "../components/TopRatedMovieList";
import TrendingMovieList from "../components/TrendingMovieList";
import Hero from "../components/Hero";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <CinemaMovieList />
        <TrendingMovieList />
        <TopRatedMovieList />
      </Container>
    </>
  );
};

export default HomePage;
