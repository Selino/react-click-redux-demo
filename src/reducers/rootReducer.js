const initialState = {
  counter: 0,
  users: [
    {
      _id: "U1",
      createDate: "2014-02-10T10:50:42.389Z",
      nameFirst: "John",
      nameLast: "Doe",
      email: "email@email.com"
    },
    {
      _id: "U2",
      createDate: "2014-02-10T10:50:57.240Z",
      nameFirst: "Jane",
      nameLast: "Gottlieb",
      email: "email@email.com"
    }
  ],
  challenges: [
    {
      _id: "C1",
      createDate: "2014-02-10T10:50:42.389Z",
      closeDate: "",
      owner: "U1",
      assignedTo: "U2",
      status: "open",
      ISBN: "",
      ISBNTitle: "The Holy Bible",
      currentBid: 23
    },
    {
      _id: "C2",
      createDate: "2014-02-10T10:50:42.389Z",
      closeDate: "",
      owner: "U2",
      assignedTo: "U1",
      status: "open",
      ISBN: "",
      ISBNTitle: "The Phantom Tollbooth",
      currentBid: 12.3
    }
  ]
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 }
    case "DECREMENT":
      if (state.counter > 0) {
        return { counter: state.counter - 1 }
      }
    /* falls through */
    case "RESET":
      return { counter: (state.counter = 0) }
    default:
      return state
  }
}

export default rootReducer
