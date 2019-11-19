import React, { useState } from 'react'
export function Step15() {
  const [list, setList] = useState([])
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleAdd() {
    setList([
      ...list,
      {
        value: text,
        isDone: false,
      },
    ])
    setText('')
  }

  function removedItem(index) {
    list.splice(index, 1)
    setList([...list])
  }

  function handleFinished(e, index) {
    const isChecked = e.target.checked
    list[index].isDone = isChecked
    setList([...list])
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAdd}>添加</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <input type="checkbox" onChange={e => handleFinished(e, index)} />
              <span style={{ color: item.isDone ? 'red' : 'black' }}>
                {item.value}
              </span>
              <button onClick={() => removedItem(index)}>删除</button>
            </li>
          )
        })}
      </ol>
      <div>已完成:{list.filter(item => item.isDone).length}</div>
      <div>总任务数:{list.length}</div>
    </div>
  )
}
