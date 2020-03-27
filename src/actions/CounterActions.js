export const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
})

export const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
})

export const setCount = ({ counter }) => ({
  type: "SET",
  counter
})

export const resetCount = () => ({
  type: "RESET"
})
