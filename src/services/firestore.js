// Initialize Cloud Firestore through Firebase
import firebase from 'firebase'
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

export default firebase.firestore();