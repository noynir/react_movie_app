import React, { Component } from 'react'

const Movie = (props) => {
    const { id, title, year } = props.movie;
    return (<div>
        <div>
            Id: { id }
        </div>
        <div>
            Title: { title } 
        </div>
        <div>
            Year: { year }
        </div>
    </div>);
}

export default Movie;
