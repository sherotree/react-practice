import React, { useState } from 'react'

export function Step14() {
  const [list, setList] = useState([])
  const [removedList, setRemovedList] = useState([])
  const [finishedList, setFinishedList] = useState([])
  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleAdd() {
    setList([...list, text])
    setText('')
  }

  function removedAll() {
    setRemovedList([...removedList, ...list])
    setList([])
  }

  function finishedAll() {
    setFinishedList([...finishedList, ...list])
    setList([])
  }

  function removedItem(index) {
    const remItem = list[index]
    list.splice(index, 1)
    setList([...list])
    setRemovedList([...removedList, remItem])
  }

  function finishedItem(index) {
    const finItem = list[index]
    list.splice(index, 1)
    setList([...list])
    setFinishedList([...finishedList, finItem])
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <input value={text} onChange={handleChange} />
      <button onClick={handleAdd}>添加</button>
      <button onClick={removedAll}>删除全部</button>
      <button onClick={finishedAll}>完成全部</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li key={index + item}>
              <span>{item}</span>
              <button onClick={() => removedItem(index)}>删除</button>
              <button onClick={() => finishedItem(index)}>完成</button>
            </li>
          )
        })}
      </ol>

      <h2>已完成列表</h2>
      <ol>
        {finishedList.map((item, index) => {
          return (
            <li key={item + '2'}>
              <span>{item}</span>
            </li>
          )
        })}
      </ol>

      <h2>已删除列表</h2>
      <ol>
        {removedList.map((item, index) => {
          return (
            <li key={item + '3'}>
              <span>{item}</span>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
