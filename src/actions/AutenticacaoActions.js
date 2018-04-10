import { Actions } from 'react-native-router-flux'
import {
    LOGIN_EM_ANDAMENTO
} from './types';

export const realizarLogin = () => {
    return dispatch => 
    {
        dispatch({
            type: LOGIN_EM_ANDAMENTO
        });
    }
}

export const cadastraUsuario = () => {
    return dispatch => 
    {
        dispatch({
            type: 'teste'
        });
    }
}