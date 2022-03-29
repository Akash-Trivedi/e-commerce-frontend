import React from 'react'
import '../context/UserContext'
import UserContext from '../context/UserContext'


export default function UserState(props) {
  let [userData, updateUserData] = React.useState({
    userInfo: {},
    shops: [],
    feedbacks: [],
    products: [],
    totalSales: 0
  })
  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {props.children}
    </UserContext.Provider>
  )
}
