import React from 'react';
import './App.css';
import useMovies from "./hooks/useMovies";
import MovieGallery from "./components/MovieGallery";
import {HashRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import NavBar from "./components/NavBar";

function App() {

    const {movies, getAllMovies, postNewMovie} = useMovies();

    return (
        <div className="App">
            <header className={"App-header"}>
            <HashRouter>
                <h1> Movie Gallery</h1>
                <NavBar/>
                <Routes>
                    <Route path={"/homepage"} element={<Homepage/>}/>
                    <Route path={"/"} element={<MovieGallery movies={movies} getAllMovies={getAllMovies} postNewMovie={postNewMovie}/>}/>
                </Routes>
            </HashRouter>
            </header>
        </div>
    );
}

export default App;
