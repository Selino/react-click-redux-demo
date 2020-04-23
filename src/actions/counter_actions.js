import database from "../firebase/firebase"

export const startCount = () => {
  return (dispatch) => {
    database
      .ref()
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val()
        dispatch(
          setCount({
            counter: data.counter,
          })
        )
        let n = document.getElementsByClassName("counter-line")
        n[0].style.visibility = "visible"
      })
      .catch((e) => {
        console.log(`Oops!: ${e.message}`)
      })
  }
}

export const setCount = ({ counter }) => ({
  type: "SET",
  counter,
})

export const incrementCount = (incrementBy, currentCount) => {
  database
    .ref()
    .update({
      counter: currentCount + incrementBy,
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`)
    })
  return { type: "INCREMENT", incrementBy }
}

export const decrementCount = (decrementBy = 1, currentCount) => {
  database
    .ref()
    .update({
      counter: currentCount - decrementBy,
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`)
    })
  return { type: "DECREMENT", decrementBy }
}

export const resetCount = () => {
  database
    .ref()
    .update({
      counter: 0,
    })
    .catch((e) => {
      console.log(`Error: ${e.message}`)
    })
  return {
    type: "RESET",
  }
}
