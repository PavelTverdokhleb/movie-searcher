import * as types from "../actions/constants";

const INITIAL_STATE = {
    movies_list: [],
    error: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.GET_MOVIES_SUCCESS :
            return {...state, movies_list : action.payload.data};
        case types.GET_MOVIES_FAIL :
            return {...state, error : action.error.response.data};
        default:
            return state;
    }
}
