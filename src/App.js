import "./App.css";
import { useState } from "react";
import FilterByTitle from "./Filter/Filter.js";
import FilterByRating from "../src/Rating/Rating";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Moviedata from "./moviedata/MovieData"
import MoviesList from "./MoviesList";
import AddMovie from "./AddMovie";


function App() {
  const [movies, setMovies] = useState(Moviedata);
  const [inputText, setInputText] = useState("");
  const [value, setValue] = useState(1);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
            <FilterByTitle
            inputText={inputText}
            setInputText={setInputText}
          />
          <FilterByRating
            isFilter={true}
            value={value}
            setValue={setValue}
          />

              <AddMovie movies={movies} setMovies={setMovies} />
              <MoviesList movies={movies} inputText={inputText} value={value} />

            </div>
          }
        />
        <Route
          path="/Newpage/:id"
          element={<newpage movies={movies}></newpage>}
        ></Route>
        
      </Routes>
    </div>
  )
};

export default App;
