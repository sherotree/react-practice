import React, { useState } from 'react'

export function Step4() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState('')

  function handleCount() {
    if (count > 20) {
      setCount(0)
      setShow('不好意思，我要清零啦')
    } else if (count === 15) {
      setShow('求求你不要再点啦')
    } else if (count === 5) {
      setShow('你已经超过5下啦')
    }
    setCount(count + 1)
  }
  return (
    <div>
      <div
        style={{
          margin: '50px',
          textAlign: 'center',
          width: '400px',
          lineHeight: '400px',
          fontSize: '40px',
          border: '1px solid black',
          borderRadius: '20%',
        }}
        onClick={handleCount}
      >
        <div>{count}</div>
        <div
          style={{
            fontSize: '40px',
            color: 'green',
            fontWeight: 'bolder',
          }}
        >
          {show}
        </div>
      </div>
    </div>
  )
}
