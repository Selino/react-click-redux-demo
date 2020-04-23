import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCL_Lo3hHzl4soj8Gb2MQ6Lsy1M5h-E6lk",
  authDomain: "react-click-redux-demo.firebaseapp.com",
  databaseURL: "https://react-click-redux-demo.firebaseio.com",
  projectId: "react-click-redux-demo",
  storageBucket: "react-click-redux-demo.appspot.com",
  messagingSenderId: "931347627875",
  appId: "1:931347627875:web:e5c45c8dcb825939b7dd56",
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }
