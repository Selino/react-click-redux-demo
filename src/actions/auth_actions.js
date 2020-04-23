import { firebase, googleAuthProvider } from "../firebase/firebase"

export const login = (uid) => {
  console.log(`Logged in with: ${uid}`)
  return {
    type: "LOGIN",
    uid,
  }
}

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const logout = () => {
  console.log(`Logged out.`)
  return {
    type: "LOGOUT",
  }
}

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
