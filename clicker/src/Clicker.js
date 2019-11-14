import React, { useState } from 'react'
import './Clicker.css'
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
          +
        </div>
        <div className="refresh btn" onClick={handleRefresh}>
          refresh
        </div>
        <div className="decrease btn" onClick={handleDecrease}>
          -
        </div>
      </div>
    </div>
  )
}
