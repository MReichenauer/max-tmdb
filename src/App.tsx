import "../src/assets/scss/App.scss";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";
import MovieByIdPage from "./pages/MovieByIdPage";
import PersonByIdPage from "./pages/PersonByIdPage";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genres/:id" element={<MoviesByGenrePage />} />
        <Route path="/movie/:id" element={<MovieByIdPage />} />
        <Route path="/people/:id" element={<PersonByIdPage />} />
      </Routes>
    </div>
  );
}

export default App;
