import Loading from "./Loading";
import useMovieById from "../hooks/useMovieById";
import { Link, useParams } from "react-router-dom";
import DetailCard from "./cards/DetailCard";
import Button from "react-bootstrap/Button";
import noImage from "../assets/img/no-image-6665.png";
import noImageSquare from "../assets/img/noimageSquare.jpg";
import ActorOrCrewCard from "./cards/ActorOrCrewCard";
import HorizontalListGrpPersons from "./lists/HorizontalListGrpPersons";

const SingleMovie = () => {
  const { id } = useParams();

  const {
    data: singleMovie,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
    error: errorMovie,
    isSuccess: isSuccessMovie,
  } = useMovieById(Number(id));

  if (isLoadingMovie) {
    return <Loading />;
  }

  if (isErrorMovie) {
    return <p>{errorMovie.message}</p>;
  }

  if (!singleMovie) {
    return <p>Kunde inte hitta filmen, försök igen!</p>;
  }

  const genreLinks = singleMovie.genres.map((genre) => (
    <Link to={`/genres/${genre.id}`} key={genre.id}>
      <Button variant="outline-primary" className="me-1 mb-2 p-1 px-2">
        {genre.name}
      </Button>
    </Link>
  ));

  // So the most relevant actor comes first in the list of actors
  const sortedActors = singleMovie.credits.cast.sort(
    (a, b) => a.order - b.order
  );

  const singleActor = sortedActors.map((actor) => (
    <ActorOrCrewCard
      path={`/people/${actor.id}`}
      key={actor.cast_id}
      image_url={
        actor.profile_path
          ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
          : noImage
      }
      alt={`Image of ${actor.original_name}`}
      original_name={actor.original_name}
      role={actor.character}
      gender={actor.gender}
      label={"Roll: "}
    />
  ));

  const crewMember = singleMovie.credits.crew.map((crew) => (
    <ActorOrCrewCard
      path={`/people/${crew.id}`}
      key={crew.credit_id}
      image_url={
        crew.profile_path
          ? `https://image.tmdb.org/t/p/w200${crew.profile_path}`
          : noImage
      }
      alt={`Image of ${crew.original_name}`}
      original_name={crew.original_name}
      role={`${crew.job}`}
      label={"Jobb: "}
      gender={crew.gender}
    />
  ));

  return (
    <>
      {isSuccessMovie && (
        <div className="container mt-3">
          <div className="d-flex justify-content-center mb-1">
            <h1>{singleMovie.original_title}</h1>
          </div>
          <DetailCard
            key={singleMovie.id}
            id={singleMovie.id}
            image_url={
              singleMovie.poster_path
                ? `https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`
                : noImageSquare
            }
            alt={`Image of ${singleMovie.original_title}`}
            genres={genreLinks}
            rate={singleMovie.vote_average}
            language={singleMovie.original_language}
            release_date={singleMovie.release_date}
            runtime={singleMovie.runtime}
            overview={singleMovie.overview}
          />
        </div>
      )}
      <HorizontalListGrpPersons
        children={singleActor}
        description="Bläddra till höger mellan alla skådespelare"
      />

      <HorizontalListGrpPersons
        children={crewMember}
        description="Bläddra till höger mellan alla medverkande personer"
      />
    </>
  );
};

export default SingleMovie;
