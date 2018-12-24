import React, { Component } from 'react'
import './moviesContainer.css';
import MovieForm from '../../movies/movie-form/movie-form';
import MovieModel from '../../models/movie.model';
import MovieList from '../../movies/MovieList/MovieList';
import { connect } from 'react-redux';
import { toggleTheme } from '../../actions/theme.actions';
import { selectMovie, fetchMovies, saveMovie } from '../../actions/movies.actions';

class MoviesContainer extends Component{

    constructor(props){
        super(props);
    }


    async componentDidMount(){
        
        this.props.fetchMovies();
    }

    
    movieSelected(inx){

        this.setState( {selectedIndex: inx});
    }

    render() {

        let form;
        if(this.props.movies.selectedMovieIndex >= 0){
            const selectedMovie = this.props.movies.list[this.props.movies.selectedMovieIndex];
            form = <MovieForm 
                movie={selectedMovie} 
                movieSaved={ this.props.saveMovie } 
                key={selectedMovie.id}
            ></MovieForm>;
        }
        return <section className={this.props.theme.isDark ? 'dark' : 'light'}>
            <div >
                <div className="themeButton">
                    <button onClick={ this.props.toggleTheme } >
                       { this.props.theme.isDark ? 'Light' : 'Dark' }
                    </button>
                </div>
                <h1>Movie Catalog</h1>
                <hr />
            </div>
            <div className="main">
                { form }
                <MovieList movies={this.props.movies.list}
                    selectedIndex={this.props.movies.selectedMovieIndex}
                    itemSelected={this.props.selectMovie}
                ></MovieList>
            </div>
        </section>
    }
}


const mapStateToProps = state => ({
    theme: state.theme,
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    toggleTheme: () => dispatch( toggleTheme() ),
    selectMovie: (index) =>  dispatch( selectMovie({index}) ),
    fetchMovies: () => dispatch(fetchMovies()),
    saveMovie: (movie) => dispatch( saveMovie(movie) )
})


export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);




