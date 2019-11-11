import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import UserReducer from './reducerUser';
import MovieReducer from './reducerMovie';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        user: UserReducer,
        movie: MovieReducer
    });

export default rootReducer;
