import { Container } from "react-bootstrap";
import MoviesByGenreList from "../components/lists/MoviesByGenreList";

const MoviesByGenrePage = () => {
  return (
    <Container className="pb-5">
      <MoviesByGenreList />
    </Container>
  );
};

export default MoviesByGenrePage;
