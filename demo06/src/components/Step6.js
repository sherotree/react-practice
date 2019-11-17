import React, { useState } from 'react'

export function Step6() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLoggedIn() {
    setIsLoggedIn(!isLoggedIn)
    console.log(isLoggedIn)
  }

  return (
    <div>
      <Greeting onClick={handleLoggedIn} isLoggedIn={isLoggedIn} />
      <Button onClick={handleLoggedIn} isLoggedIn={isLoggedIn} />
    </div>
  )

  function Greeting(props) {
    if (props.isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }

  function UserGreeting() {
    return <h1>Welcome back!</h1>
  }

  function GuestGreeting() {
    return <h1>Please sign up!</h1>
  }

  function Button(props) {
    if (props.isLoggedIn) {
      return <button onClick={props.onClick}>Log Out</button>
    }
    return <button onClick={props.onClick}>Log In</button>
  }
}
