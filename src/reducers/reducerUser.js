import * as types from "../actions/constants";

const INITIAL_STATE = {
    menuOpen: true,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_MENU_STATE :
            return {...state, menuOpen : action.status};
        default:
            return state;
    }
}
