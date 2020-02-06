import React, { createContext, useState } from "react"

export const UsersContext = createContext()

const UsersContextProvider = props => {
  const [users, setUsers] = useState([
    {
      id: 1,
      createDate: "2014-02-10T10:50:42.389Z",
      firstName: "John",
      lastName: "Doe"
    },
    {
      id: 2,
      createDate: "2014-02-10T10:50:57.240Z",
      firstName: "Selino",
      lastName: "Valdes"
    }
  ])
  return (
    <UsersContext.Provider value={{ users }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersContextProvider
