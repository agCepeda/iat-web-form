import * as ACTIONS from '../actions';
import * as TYPES from "./types";

import store from '../services/firestore'
import firebase from 'firebase'
require("firebase/firestore");

export const setResultIds = (resultIds) => {
	return {
		type: TYPES.SET_RESULT_IDS,
		payload: resultIds
	}
}

export const getAllResults = (dataSet = 'resultados') => dispatch => {
	return store
	  .collection(dataSet)
	  .orderBy(firebase.firestore.FieldPath.documentId())
	  //.startAt(0)
	  //.limit(50)
	  .get()
	  .then(r => {
	  	let result = r.docs.map(r1 => r1.id)
		  console.log(result);
		  dispatch(setResultIds(result));
		  return result;
	  });
}
export const getResultById = (resultId) => (dispatch, getState) => {
	const result = getState().adminState.resultMap[resultId]
	if (result) {
		return Promise.resolve(result);
	}

	return store
	  .doc(`${resultId}`)
	  .get()
	  .then(r => {
	  	console.log("GET REESUKLT", r)
	  	var resultData = r.data();
	  	resultData.id = r.id;
	  	dispatch(storeResult(resultId, resultData))
	  	return resultData;
	  });
}

export const storeResult = (id, result) => {
	return {
		type: TYPES.STORE_RESULT,
		payload: { id, result }
	}
}