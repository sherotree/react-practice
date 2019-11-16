import React from 'react'

export function Step2(props) {
  return (
    <div>
      <div>我是第二个组件</div>
      <Foo />
      <Bar title="想吃东西，今天好像又重了一些" />
      <Bar title="食欲太好怎么办" />
      <Bar />
    </div>
  )
}

function Foo() {
  return <div style={{ color: 'pink' }}>每天都有好食欲</div>
}

function Bar(props) {
  const { title = '减肥好难' } = props
  return <div style={{ color: 'lightblue', fontWeight: 'bold' }}>{title}</div>
}
