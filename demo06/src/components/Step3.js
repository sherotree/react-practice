import React from 'react'

export function Step3(props) {
  return (
    <div>
      <div>我是第三个组件</div>
      <FooBar title="吭吭哧哧" color="red" />
      <FooBar title="在听孙燕姿的歌" name="fish" />
    </div>
  )
}
function FooBar(props) {
  const { title, name, color } = props

  return (
    <div>
      <Foo color={color} title={title} />
      <Bar name={name} title={title} />
    </div>
  )
}

function Foo(props) {
  const { name = 'never give up', title, color } = props
  return <div style={{ color }}>{'title:' + title}</div>
}

function Bar(props) {
  const { color, name = 'cloud', title } = props
  return (
    <div style={{ color }}>
      {'name:' + name}
      {'title:' + title}
    </div>
  )
}
