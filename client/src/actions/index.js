//actions
import axios from 'axios';
import { FETCH_USER } from './types';

//whenever function is called reduxthunk sends dispatch as an argument

export const fetchUser = ()=> async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({type: FETCH_USER, payload : res.data});
    };

