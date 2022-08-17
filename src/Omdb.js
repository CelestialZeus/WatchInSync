import axios from 'axios';
import React, { useState } from 'react'

function Omdb({ searchText, searchyear }) {
    const [imdbdata, setImdbdata] = useState([]);

    const imdb = (searchTexts, searchyear) => {
        searchText && (
            axios.get(`https://www.omdbapi.com/?t=${searchTexts}&y=${searchyear}&apikey=45eb8469`).then((response) => {
                setImdbdata(response.data.imdbRating);
                console.log(imdbdata);
            }
            )
        )
    }


    return (
        <div>
            {imdb(searchText, searchyear)}
            <p>{imdbdata}</p>
        </div>
    )
}

export default Omdb
