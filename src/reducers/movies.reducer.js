import * as fromMovies from '../actions/movies.actions' 

const initialState = {
    selectedMovieIndex: -1,
    list:[],
    loading: false
}

export function movies(state = initialState, action){
    switch(action.type){
        case fromMovies.SELECT_MOVIE:
            return { ...state, selectedMovieIndex: action.payload.index };
        case fromMovies.LOAD_MOVIES:
        case fromMovies.UPDATE_MOVIE:
            return { ...state, loading:true};
        case fromMovies.LOADED_MOVIES:
            return { ...state, list: action.payload.movies,  loading: false }
        case fromMovies.UPDATED_MOVIE:
            const list = [...state.list];
            list[state.selectedMovieIndex] = action.payload.updatedMovie;
            return { ...state, loading:false, list }
        default:
            return state;
    }
}