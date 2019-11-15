import React, { useState } from 'react'
import './Clicker.css'
import ADD_ICON from './images/add.png'
import DECREASE_ICON from './images/decrease.png'
import REFRESH_ICON from './images/refresh.png'

export function Clicker() {
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count + 1)
  }

  function handleDecrease() {
    setCount(count - 1)
  }

  function handleRefresh() {
    setCount(0)
  }

  return (
    <div className="wrapper">
      <div className="count">{count}</div>
      <div className="btns">
        <div className="add btn" onClick={handleAdd}>
          <img src={ADD_ICON} alt="add" />
        </div>
        <div className="refresh btn" onClick={handleRefresh}>
          <img src={REFRESH_ICON} alt="refresh" />
        </div>
        <div className="decrease btn" onClick={handleDecrease}>
          <img src={DECREASE_ICON} alt="decrease" />
        </div>
      </div>
    </div>
  )
}
