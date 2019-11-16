import React, { useState } from 'react'
import './App.css'
import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'

function App() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const [selectedIndex, setSelectedIndex] = useState(1)

  return (
    <div>
      {/*根据list渲染出6个元素，点击元素可以改变selectedIndex的值*/}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '60px',
        }}
      >
        {list.map(item => (
          <div
            style={{
              width: '80px',
              height: '100px',
              border: '1px solid gray',
            }}
            onClick={() => setSelectedIndex(item)}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      {/* 根虎当前的selectedIndex来显示不同组件*/}
      {selectedIndex === 1 && (
        <Step1 title="我是第一个组件" plans={['早起', '吃早餐', '去玩喽']} />
      )}
      {selectedIndex === 2 && <Step2 />}
      {selectedIndex === 3 && <div>ToDo:这是我的第三个组件</div>}
      {selectedIndex === 4 && <div>ToDo:这是我的第四个组件</div>}
      {selectedIndex === 5 && <div>ToDo:这是我的第五个组件</div>}
      {selectedIndex === 6 && <div>ToDo:这是我的第六个组件</div>}
      {selectedIndex === 7 && <div>ToDo:这是我的第七个组件</div>}
      {selectedIndex === 8 && <div>ToDo:这是我的第八个组件</div>}
      {selectedIndex === 9 && <div>ToDo:这是我的第九个组件</div>}
      {selectedIndex === 10 && <div>ToDo:这是我的第十个组件</div>}
      {selectedIndex === 11 && <div>ToDo:这是我的第十一个组件</div>}
      {selectedIndex === 12 && <div>ToDo:这是我的第十二组件</div>}
    </div>
  )
}

export default App
