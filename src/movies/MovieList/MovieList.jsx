import React, { Component } from 'react'
import MovieItem from '../movie-item/MovieItem';
import './MovieList.css';

const MovieList = (props) => {
   const { movies, selectedIndex  } = props;

   const list = (movies || []).map( (movie,inx) => 
    <li key={movie.id}
        className={ inx === selectedIndex ? 'selected' : '' }
        onClick={ (e) => props.itemSelected(inx) }
    >    
        <MovieItem movie={movie} ></MovieItem>
    </li>
    )

   return <ul className="movie-list">
        {list}
    </ul>
        
}

export default MovieList;