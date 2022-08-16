import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function Carousal() {
    const [movies, setMovies] = useState([]);
    const [value, setValue] = useState(0);
    const [search, setSearch] = useState("Titanic");

    useEffect(() => {
        axios
            .get(`https://www.omdbapi.com/?s=${search}&apikey=45eb8469`)
            .then((response) => {
                setMovies(response.data);
                response.data.Search.sort(function (a, b) {
                    return a.Year - b.Year;
                });
            });
    }, [search]);

    const moveBehind = () => {
        value === -100 * (movies.Search.length - 7)
            ? setValue(0)
            : setValue(value - 100);
    };
    const moveAhead = () => {
        console.log(value);
        value === 0
            ? setValue(-100 * (movies.Search.length - 7))
            : setValue(value + 100);
    };

    return (
        <div className="bodyDiv">
            <button id="moveBehind" onClick={moveAhead}  >&lt;</button>

            <div className="glider">

                {movies.Response === "True" ? (
                    movies.Search.map((movie, index) => {
                        return (

                            <div
                                key={index}
                                className="glide"
                                style={{ transform: `translateX(${value}%)` }}
                            >
                                <img
                                    key={movie.imdbID}
                                    className="poster"
                                    src={movie.Poster}
                                    alt={movie.imdbID}
                                />
                                <p>{movie.Title} ({movie.Year})</p>
                            </div>
                        );
                    })

                ) : (
                    <div className="errorDiv">Nothing Trending. Please contact the developer if problem persists.</div>
                )}

            </div>
            <button id="moveAhead" onClick={moveBehind} >&gt;</button>

            {/* <div >
                {(movies.Response === "True") &&
                    <div>
                        <button id="moveBehind" onClick={moveAhead}  >&lt;</button>
                        <button id="moveAhead" onClick={moveBehind} >&gt;</button>

                    </div >}
            </div> */}
        </div>
    );
}
