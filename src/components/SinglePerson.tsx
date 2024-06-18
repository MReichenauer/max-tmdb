import { useParams } from "react-router-dom";
import usePersonById from "../hooks/usePersonById";
import DetailCardPerson from "./DetailCardPerson";
import noImageSquare from "../assets/img/noimageSquare.jpg";
import HorizontalListGrp from "./HorizontalListGrp";
import OverviewCard from "./OverviewCard";
import Loading from "./Loading";

const SinglePerson = () => {
  const { id } = useParams();

  const {
    data: singlePerson,
    isLoading: isLoadingPerson,
    isError: isErrorPerson,
    error: errorPerson,
    isSuccess: isSuccessPerson,
  } = usePersonById(Number(id));

  if (isLoadingPerson) {
    return <Loading />;
  }

  if (isErrorPerson) {
    return <p>{errorPerson.message}</p>;
  }

  // Making use of set be cause i noticed i could get back the same movie multiply times for example if the person has both been acting in it and directing the movie.
  const movieIds = new Set();

  return (
    <>
      {isSuccessPerson && (
        <div className="container mt-3 ">
          <h1 className="text-center mb-3">{singlePerson.name}</h1>
          <div className="d-flex justify-content-center mb-1">
            <DetailCardPerson
              key={singlePerson.id}
              id={singlePerson.id}
              image_url={
                singlePerson.profile_path
                  ? `https://image.tmdb.org/t/p/w500${singlePerson.profile_path}`
                  : noImageSquare
              }
              alt={`Image of ${singlePerson.name}`}
              gender={singlePerson.gender}
              birthday={singlePerson.birthday}
              place_of_birth={singlePerson.place_of_birth}
              known_for_department={singlePerson.known_for_department}
            />
          </div>
          <div className="container mt-5 mb-5">
            <h2>Filmer</h2>
            <p className="mb-0">
              <em>
                Bläddra till höger mellan de filmer {singlePerson.name}{" "}
                medverkat i.
              </em>
            </p>
            <HorizontalListGrp>
              {singlePerson.credits.cast &&
                singlePerson.credits.cast
                  .filter((movie) => {
                    if (movieIds.has(movie.id)) {
                      return false;
                    }
                    movieIds.add(movie.id);
                    return true;
                  })
                  .map((inMovie) => (
                    <OverviewCard
                      key={`actingIn${inMovie.id}`}
                      id={inMovie.id}
                      image_url={
                        inMovie.poster_path
                          ? `https://image.tmdb.org/t/p/w300${inMovie.poster_path}`
                          : noImageSquare
                      }
                      title={inMovie.original_title}
                      rate={inMovie.vote_average}
                      language={inMovie.original_language}
                    />
                  ))}

              {singlePerson.credits.crew &&
                singlePerson.credits.crew
                  .filter((movie) => {
                    if (movieIds.has(movie.id)) {
                      return false;
                    }
                    movieIds.add(movie.id);
                    return true;
                  })
                  .map((inMovie) => (
                    <OverviewCard
                      key={`crewIn${inMovie.id}`}
                      id={inMovie.id}
                      image_url={
                        inMovie.poster_path
                          ? `https://image.tmdb.org/t/p/w300${inMovie.poster_path}`
                          : noImageSquare
                      }
                      title={inMovie.original_title}
                      rate={inMovie.vote_average}
                      language={inMovie.original_language}
                    />
                  ))}
            </HorizontalListGrp>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePerson;
