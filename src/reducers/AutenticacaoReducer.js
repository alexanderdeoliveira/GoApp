import {
    LOGIN_EM_ANDAMENTO
} from '../actions/types';

const INITIAL_STATE = {
    mensagemErroLogin: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}