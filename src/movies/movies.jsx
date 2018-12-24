import React, { Component } from 'react'
import './movies.css';
import MovieForm from './movie-form/movie-form';
import MovieModel from '../models/movie.model';
import MovieList from './MovieList/MovieList';

const MOVIES_API = 'http://localhost:3030/movies'

class Movies extends Component{

    constructor(props){
        super(props)
        const randId = Math.floor(Math.random() * 10000);
        const movie = new MovieModel(randId,'Toy Story', 1998);   

        this.state = { 
            movie, 
            movies:[],
            selectedIndex:-1
        };  

    }


    async componentDidMount(){
        
        const movies = await this.getMovies();

        this.setState({ movies });
    }

    getMovies(){

        return fetch(MOVIES_API)
            .then( res => res.json());
    }

    async movieSaved(movie){
        // console.log(movie);
        const movies = [...this.state.movies];

        try {
            const updatedMovie = await fetch(`${MOVIES_API}/${movie.id}`,
            {
                method:'PUT',
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(movie)
            })
            .then(res =>  res.json());

            movies[this.state.selectedIndex] = updatedMovie;
            this.setState( { movies });

        } catch (error) {
            this.handleError(error);
        }    
    }

    movieSelected(inx){

        this.setState( {selectedIndex: inx});
    }

    render() {

        let form;
        if(this.state.selectedIndex >= 0){
            const selectedMovie = this.state.movies[this.state.selectedIndex];
            form = <MovieForm 
                movie={selectedMovie} 
                movieSaved={ movie => this.movieSaved(movie)} 
                key={selectedMovie.id}
            ></MovieForm>;
        }
        return <section>
            <div>
                <h1>Movie Catalog</h1>
                <hr />
            </div>
            <div className="main">
                { form }
                <MovieList movies={this.state.movies}
                    selectedIndex={this.state.selectedIndex}
                    itemSelected={(inx) => this.movieSelected(inx) }
                ></MovieList>
            </div>
        </section>
    }
}

export default Movies;
