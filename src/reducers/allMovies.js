/* eslint-disable import/prefer-default-export */

import { GET_MOVIES_REQUEST, DELETE_MOVIE } from '../actions/moviesActions';
import { SORT_MOVIES } from '../actions/sortingActions';

const initialState = {
    movies: []
};

export function moviesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_MOVIES_REQUEST:
        return {...state, movies: action.payload };
    case SORT_MOVIES:
        return {...state, movies: action.payload };
    case DELETE_MOVIE:
        return {...state, movies: action.payload };
    default:
        return state;
    }
}