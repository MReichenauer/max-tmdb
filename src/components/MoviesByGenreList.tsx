import Loading from "./Loading";
import OverviewCard from "./OverviewCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useMoviesByGenre from "../hooks/useMoviesByGenre";
import useAllGenres from "../hooks/useAllGenres";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import arrowLeft from "../assets/img/arrows/arrowLeft.svg";
import arrowRight from "../assets/img/arrows/arrowRight.svg";
import noImageSquare from "../assets/img/noimageSquare.jpg";

const MoviesByGenreList = () => {
  const { id } = useParams();
  const genreId = Number(id);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page")) || 1;

  const {
    data: moviesByGenres,
    isLoading: isLoadingMovies,
    isError: isErrorMovies,
    error: errorMovies,
    isSuccess: isSuccessMovies,
  } = useMoviesByGenre(genreId, page);

  const {
    data: allGenres,
    isLoading: isLoadingGenres,
    isError: isErrorGenres,
    error: errorGenres,
    isSuccess: isSuccessGenres,
  } = useAllGenres();

  if (isLoadingMovies || isLoadingGenres) return <Loading />;
  if (isErrorMovies)
    return <p>Ett fel uppstod vid hämtning av filmer: {errorMovies.message}</p>;
  if (isErrorGenres)
    return <p>Ett fel uppstod vid hämtning av genre: {errorGenres.message}</p>;

  let currentGenre = "";
  if (isSuccessGenres) {
    const genre = allGenres.find((genre) => genre.id === genreId);
    currentGenre = genre ? genre.name : "Genre kan ej hittas";
  }

  const handleNextPage = () => {
    navigate(`?page=${page + 1}`);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      navigate(`?page=${page - 1}`);
    }
  };

  return (
    <>
      <div>
        <h2>Genre: {currentGenre}</h2>
        <p>
          Bläddra mellan <em>{moviesByGenres?.total_results}</em> olika filmer
          inom genren {currentGenre}
        </p>
        {isSuccessMovies && (
          <ul className="row px-0">
            {moviesByGenres.results.map((movieByGenre) => (
              <div
                className="d-flex justify-content-center col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mb-2"
                key={movieByGenre.id}
              >
                <OverviewCard
                  key={movieByGenre.id}
                  id={movieByGenre.id}
                  image_url={
                    movieByGenre.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movieByGenre.poster_path}`
                      : noImageSquare
                  }
                  title={movieByGenre.title}
                  rate={movieByGenre.vote_average}
                  language={movieByGenre.original_language}
                />
              </div>
            ))}
          </ul>
        )}
        <Container className="d-flex justify-content-center">
          <ButtonGroup>
            <Button
              className="me-3 py-0"
              onClick={handlePrevPage}
              disabled={page === 1}
            >
              <img src={arrowLeft} alt="Prev page" />
            </Button>
            <span>{page} / 500</span>
            <Button
              className="ms-3 py-0"
              onClick={handleNextPage}
              disabled={page === 500}
            >
              <img src={arrowRight} alt="Next page" />
            </Button>
          </ButtonGroup>
        </Container>
      </div>
    </>
  );
};

export default MoviesByGenreList;
