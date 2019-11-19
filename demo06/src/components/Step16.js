import React, { useState } from 'react'
export function Step16() {
  const colors = ['red', 'lightblue', 'yellowgreen', 'pink']
  const [list, setList] = useState([])
  const [text, setText] = useState([])
  const [theme, setTheme] = useState('red')

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleAdd() {
    setList([
      ...list,
      {
        value: text,
        isDone: false,
        theme: theme,
      },
    ])
    setText('')
  }

  function removedItem(index) {
    list.splice(index, 1)
    setList([...list])
  }

  function handleFinish(e, index) {
    const isChecked = e.target.checked
    list[index].isDone = isChecked
    setList([...list])
  }

  return (
    <div>
      <h1>TODO LIST</h1>
      <div style={{ display: 'flex' }}>
        {colors.map((item, index) => (
          <div
            onClick={() => {
              setTheme(item)
            }}
            style={{
              background: item,
              borderColor: 'yellow',
              borderStyle: 'solid',
              borderWidth: theme === item ? '2px' : '0px',
              margin: '10px',
            }}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      <input value={text} onChange={handleChange} />
      <button onClick={handleAdd}>添加</button>
      <ol>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              style={{ background: item.theme, opacity: item.isDone ? 0.6 : 1 }}
            >
              <input type="checkbox" onChange={e => handleFinish(e, index)} />
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
