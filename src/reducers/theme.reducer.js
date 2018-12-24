import * as fromTheme from '../actions/theme.actions';

const initialState = {
    isDark: true
};

export function theme( state = initialState, action) {
    switch(action.type){
        case fromTheme.THEME_TOGGLE:
         return { ...state, isDark: !state.isDark};
        default:
            return state;
    }
}