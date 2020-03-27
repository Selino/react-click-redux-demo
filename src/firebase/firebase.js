import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCL_Lo3hHzl4soj8Gb2MQ6Lsy1M5h-E6lk",
  authDomain: "react-click-redux-demo.firebaseapp.com",
  databaseURL: "https://react-click-redux-demo.firebaseio.com",
  projectId: "react-click-redux-demo",
  storageBucket: "react-click-redux-demo.appspot.com",
  messagingSenderId: "931347627875",
  appId: "1:931347627875:web:e5c45c8dcb825939b7dd56"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

database
  .ref()
  .once("value")
  .then(snapshot => {
    const data = snapshot.val()
    console.log(data)
  })
  .catch(e => {
    console.log(`There was a problem: ${e}`)
  })

// database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val())
//   },
//   e => {
//     console.log(`There as an error: ${e.message}`)
//   }
// )

// database
//   .ref()
//   .set({
//     name: "Selino Valdes",
//     age: 49,
//     stressLevel: 6,
//     job: {
//       title: "software engineer",
//       company: "Strava"
//     },
//     location: {
//       city: "San Francisco",
//       state: "CA"
//     },
//     friends: ""
//   })
//   .then(() => {
//     console.log("Data saved")
//   })
//   .catch(error => {
//     console.log(`This failed with: ${error}`)
//   })

// database
//   .ref("friends")
//   .push({
//     dick: "12",
//     legs: "long"
//   })
//   .then(() => {
//     console.log("data changed")
//   })
//   .catch(e => {
//     console.log(`Oops! ${e.message}`)
//   })

// database
//   .ref("friends")
//   .push("Aleks")
//   .then(() => {
//     console.log("data changed")
//   })
//   .catch(e => {
//     console.log(`Oops! ${e.message}`)
//   })

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// })
