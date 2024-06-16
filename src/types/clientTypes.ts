export type ListOfMovies = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

export type ListOfGenres = {
  id: number;
  name: string;
};

export type IdAndName = {
  id: number;
  name: string;
};

export type SingleMovieById = {
  id: number;
  original_title: string;
  original_language: string;
  genres: IdAndName[];
  overview: string;
  poster_path: string;
  budget: number;
  release_date: string;
  runtime: number;
  vote_average: number;
  credits: {
    cast: Actor[];
    crew: CrewMember[];
  };
};

export type Actor = {
  id: number;
  gender: number;
  original_name: string;
  character: string;
  profile_path: string;
  known_for_department: string;
  order: number;
};

export type CrewMember = {
  id: number;
  gender: number;
  original_name: string;
  job: string;
  profile_path: string;
};
