import React, { useState } from 'react'
export function Step12() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleAdd(e) {
    setList([...list, text])
    setText('')
  }

  function handleDelete(index) {
    list.splice(index, 1)
    setList([...list])
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <input value={text} onChange={e => handleChange(e)} />
      <button onClick={handleAdd}>添加</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => handleDelete(index)}>删除</button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
