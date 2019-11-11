import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import MovieReducer from './reducerMovie';
// import {reducer as formReducer} from 'redux-form';

const rootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        movie: MovieReducer
    });

export default rootReducer;
