import React, { Component } from 'react'
import './MovieItem.css';

const MovieItem = (props) => {
    const { movie } = props;

    return <div className='movie' >
        <div className="poster">
            <img src={movie.poster} />
        </div>
        <div className="info">
            <div>{movie.title}</div>
            <div>{movie.year}</div>  
        </div>
        
    </div>

}

export default MovieItem;