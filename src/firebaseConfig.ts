import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBjxcTv3SD3rC1eBbqthXlQJcPC0-t3WCw",
  authDomain: "covid19-report-app.firebaseapp.com",
  projectId: "covid19-report-app",
  storageBucket: "covid19-report-app.appspot.com",
  messagingSenderId: "609145009340",
  appId: "1:609145009340:web:3d519754c43a0baca48cb9",
  measurementId: "G-FZF2XE0Z9E"
};

firebase.initializeApp(config)

export default firebase