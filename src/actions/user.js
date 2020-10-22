import * as ACTIONS from '../actions';
import * as TYPES from "./types";

import store from '../services/firestore'
import firebase from 'firebase'
require("firebase/firestore");

export const setUser = (user) => {
	return {
		type: TYPES.SET_USER,
		payload: user
	}
}

export const setSujeto = (sujeto) => {
	return {
		type: TYPES.SET_SUJETO,
		payload: sujeto
	}
}

export const saveTestResult = (resultData) => (dispatch, getState) => {
	const { sujeto } = getState().userState;
	return store
	  .collection('resultados-2')
	  .add({ ...resultData, sujeto })
	  .then(response => {
	  	console.log(response);
	  	return response;
	  });
};
