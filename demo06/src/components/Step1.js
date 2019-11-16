import React from 'react'

export function Step1(props) {
  const {
    title = '这是我的第一个组件',
    name = '这是默认称呼',
    plans = [],
  } = props

  return (
    <div>
      <div>{title}</div>
      <div>{name}</div>
      <ul>
        {plans.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
