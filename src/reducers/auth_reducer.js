export default (state = { uid: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { uid: action.uid }
    case "LOGOUT":
      return {}
    default:
      return state
  }
}
