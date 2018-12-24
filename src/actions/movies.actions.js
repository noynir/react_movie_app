export const SELECT_MOVIE = '[MOVIES] Selected Movie';
export const LOAD_MOVIES = '[MOVIES] Load Movies';
export const LOADED_MOVIES = '[MOVIES] Loaded movies';
export const UPDATE_MOVIE = '[MOVIES] Update movie';
export const UPDATED_MOVIE = '[MOVIES] Updated movies';

export function selectMovie(payload){
    return { type: SELECT_MOVIE, payload }
}

export function loadMovies(){
    return { type: LOAD_MOVIES }
}

export function loadedMovies(payload){
    return { type: LOADED_MOVIES, payload }
}


const MOVIES_API = 'http://localhost:3030/movies'

export function fetchMovies(){
    
    function getMovies(){
        
        return fetch(MOVIES_API)
        .then( res => res.json());
    }
    
    return async dispatch => {
        
        dispatch(loadMovies());
        
        try {
            
            const movies = await getMovies();
            
            dispatch(loadedMovies({movies}));
            
        } catch (error) {
            console.error(error);
        }
        
        
        
    }
    
}

export function updateMovie(){
    return { type: UPDATE_MOVIE }
}

export function updatedMovie(payload){
    return { type: UPDATED_MOVIE, payload }
}

export function saveMovie(movie){

       return async (dispatch) => {
            
            dispatch(updateMovie());
            try {
                const newMovie = await fetch(`${MOVIES_API}/${movie.id}`,
                    {
                        method:'PUT',
                        headers:{
                            "Content-Type":'application/json',
                        },
                        body:JSON.stringify(movie)
                    })
                    .then(res =>  res.json());

                dispatch(updatedMovie({ updatedMovie: newMovie }));

            } catch (error) {
                
            }    
    }
}
