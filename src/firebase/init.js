import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAq64BXcypOazm_tC4p5FRABLjAHF5Ez1k",
  authDomain: "vue-geo-spot.firebaseapp.com",
  databaseURL: "https://vue-geo-spot.firebaseio.com",
  projectId: "vue-geo-spot",
  storageBucket: "",
  messagingSenderId: "732408992671"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()