import * as TYPE from '../actions/types';

const INITIAL_STATE = {
	resultMap: {}
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TYPE.STORE_RESULT: {
			return { ...state, resultMap: {...state.resultMap, [action.payload.id]: action.payload.result } }
		}
		default:
			return state;
	}
}

export default reducer;
