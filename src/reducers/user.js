import * as TYPE from '../actions/types';

const INITIAL_STATE = {
    user: {},
    sujeto: {},
    resultIds: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPE.SET_USER: {
            return { ...state, user: action.payload };
        }
        case TYPE.SET_SUJETO: {
            return { ...state, sujeto: action.payload };
        }
        case TYPE.SET_RESULT_IDS: {
            return { ...state, resultIds: action.payload };
        }
        default:
            return state;
    }
}

export default reducer;
