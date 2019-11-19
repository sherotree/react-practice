import React, { useState } from 'react'
export function Step13() {
  const [list, setList] = useState([])
  const [removedList, setRemovedList] = useState([])
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleAdd() {
    setList([...list, text])
    setText('')
  }

  function removedItem(index) {
    const currentItem = list[index]
    list.splice(index, 1)
    setList([...list])
    setRemovedList([...removedList, currentItem])
  }

  function removeAll() {
    setRemovedList([...removedList, ...list])
    setList([])
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAdd}>添加</button>
      <button onClick={removeAll}>删除全部</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li key={index + item}>
              <span>{item}</span>
              <button onClick={() => removedItem(index)}>删除</button>
            </li>
          )
        })}
      </ol>

      <h2>已删除列表</h2>
      <ol>
        {removedList.map(item => {
          return (
            <li key={item + 1}>
              <span>{item}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
