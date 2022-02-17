import { MoviesActions } from "../actions/moviesActions";

export const moviesInitialState = {
    movies: []
};

export default function moviesReducer(state = moviesInitialState, action) {
    const { payload, type } = action;

    switch (type) {

        case MoviesActions.RefreshMovies:            
            let newState = {
                movies: payload.results,
                ...payload
            }
            delete newState.results;
            return newState;

        default:
            return state
    }
}
