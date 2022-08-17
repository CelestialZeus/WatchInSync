import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function Carousal(searchText) {
    const [movies, setMovies] = useState([]);
    const [value, setValue] = useState(0);

    // useEffect(() => {
    //     axios
    //         .get(`https://www.omdbapi.com/?s=${searchText.searchText}&apikey=45eb8469`)
    //         .then((response) => {
    //             setMovies(response.data);
    //             console.log(response.data);
    //             response.data.Search.sort(function (a, b) {
    //                 return a.Year - b.Year;
    //             });
    //         });
    // }, [searchText]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=f2684cd54612f9a4d33528a1cef172bb`)
            .then((response) => {
                setMovies(response.data);
                console.log(response.data);
                response.data.results.sort(function (a, b) {
                    return a.release_date - b.release_date;
                });
            });
    }, []);

    const moveBehind = () => {
        value === -100 * (movies.results.length - 7)
            ? setValue(0)
            : setValue(value - 100);
    };
    const moveAhead = () => {
        console.log(value);
        value === 0
            ? setValue(-100 * (movies.results.length - 7))
            : setValue(value + 100);
    };

    return (
        <div className="bodyDiv">
            <button id="moveBehind" onClick={moveAhead}  >&lt;</button>

            <div className="glider">

                {movies.total_results > 1 ? (
                    movies.results.map((movie, index) => {
                        return (

                            <div
                                key={index}
                                className="glide"
                                style={{ transform: `translateX(${value}%)` }}
                            >
                                <img
                                    key={movie.id}
                                    className="poster"
                                    src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                                    alt={movie.id}
                                />
                                <p>{movie.original_title ? (movie.original_title) : (movie.original_name)}</p>
                                <p>{movie.release_date ? (movie.release_date.substring(0, 4)) : (movie.first_air_date.substring(0, 4))}</p>
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
