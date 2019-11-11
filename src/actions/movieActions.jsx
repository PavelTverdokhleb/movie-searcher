import * as types from './constants.jsx';
import { apiKey } from "../config";

export const getMovies = () => ({
    type: types.GET_MOVIES,
    payload: {
        client: 'default',
        request: {
            url: `/?apikey=${apiKey}&s=Star&plot=full`,
            method: 'get'
        }
    }
});
