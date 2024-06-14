import "../src/assets/scss/App.scss";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import MoviesByGenrePage from "./pages/MoviesByGenrePage";
import Hero from "./components/Hero";

function App() {
  return (
    <div id="app">
      <NavBar />
      <Hero />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/genres/:id" element={<MoviesByGenrePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
