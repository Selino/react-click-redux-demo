import {
  firebase,
  googleAuthProvider,
  githubAuthProvider,
} from "../firebase/firebase"

export const login = (uid) => {
  return {
    type: "LOGIN",
    uid,
  }
}

export const startLoginGoogleAction = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const startLoginGithubAction = () => {
  return () => {
    return firebase.auth().signInWithPopup(githubAuthProvider)
  }
}
export const logout = () => {
  return {
    type: "LOGOUT",
  }
}

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
