import * as ACTIONS from '../actions';
import * as TYPES from "./types";


// Initialize Cloud Firestore through Firebase

import firebase from 'firebase'
import {generateRandomCode} from "../services/test_builder";
require("firebase/firestore");

var firebaseConfig = {
	apiKey: "AIzaSyCzwf6qhRgNXStddmD7gomS_NxAw-qjxKo",
	authDomain: "iat-web.firebaseapp.com",
	databaseURL: "https://iat-web.firebaseio.com",
	projectId: "iat-web",
	storageBucket: "iat-web.appspot.com",
	messagingSenderId: "921788577500",
	appId: "1:921788577500:web:28977895611a8d5c846619"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var store = firebase.firestore();
/*
firebase.firestore()
  .collection('requirements')
  .get()
  .then(query => {
	  let req: any = [];
	  query.forEach(doc => {
		  req.push({id: doc.id, ...doc.data()});
	  });
	  setRequirements(req);
  });*/
/*
await firestore()
  .collection('posts')
  .add(postData);

docRef
  .limit(100)
  .where('active', '==', true)
  .where('location', '>', lesserGeopoint)
  .where('location', '<', greaterGeopoint)
  .onSnapshot((snapshot) => {
	  let markers = [];
	  if (snapshot) {
		  snapshot.forEach(doc => {
			  markers.push({id: doc.id, ...doc.data()});
		  });
	  }
	  dispatch(ACTIONS.setPostMarkers(markers));
  });
*/

/*
props.setSujeto(datos);
console.log(db)
var ref = db.ref("/");

var usersRef = ref.child("prueba-resultado");
usersRef.set({
	aplicante: datos
});

console.log(JSON.stringify(datos))*/


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

export const setResultIds = (resultIds) => {
	return {
		type: TYPES.SET_RESULT_IDS,
		payload: resultIds
	}
}

export const getAllResults = () => dispatch => {
	store
	  .collection('resultados')
	  .get()
	  .then(r => {
	  	console.log(r.docs.map(r1 => r1.id));
	  	dispatch(setResultIds(r.docs.map(r1 => r1.id)));
	  });
}
