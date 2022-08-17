import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Popup from 'reactjs-popup';

export default function Carousal(searchText) {
    const [movies, setMovies] = useState([]);
    const [value, setValue] = useState(0);


    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/trending/all/day?api_key=f2684cd54612f9a4d33528a1cef172bb`)
            .then((response) => {
                setMovies(response.data);
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

    const openPopup = () => {

        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>
        console.log("popup activated");
    }

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
                                    onClick={openPopup}
                                />
                                <p>{movie.original_title ? (movie.original_title) : (movie.original_name)} <br></br> ({movie.release_date ? (movie.release_date.substring(0, 4)) : (movie.first_air_date.substring(0, 4))})</p>

                                {/* <Omdb searchText={movie.original_title ? (movie.original_title) : (movie.original_name)} searchyear={movie.release_date ? (movie.release_date.substring(0, 4)) : (movie.first_air_date.substring(0, 4))} /> */}
                                <Popup trigger={<button> Trigger</button>} position="right center">
                                    <div>Popup content here !!</div>
                                </Popup>
                            </div>
                        );
                    })

                ) : (
                    <div className="errorDiv">Nothing Trending. Please contact the developer if problem persists.</div>
                )}

            </div>
            <button id="moveAhead" onClick={moveBehind} >&gt;</button>

        </div>
    );
}
