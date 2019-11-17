import React, { useState } from 'react'

function FancyBorder(props) {
  return <div>{props.children}</div>
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

export function Step5() {
  const [login, setLogin] = useState('')

  function handleChange(e) {
    setLogin(e.target.value)
  }

  function handleSignUp() {
    alert(`Welcome ${login}`)
  }

  return (
    <Dialog
      title="Mars Exploration Program"
      message="How should we refer to you?"
    >
      <input value={login} onChange={handleChange} />
      <button onClick={handleSignUp}>Sign me up!</button>
    </Dialog>
  )
}
