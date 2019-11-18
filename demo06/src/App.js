import React, { useState } from 'react'
import './App.css'
import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2'
import { Step3 } from './components/Step3'
import { Step4 } from './components/Step4'
import { Step5 } from './components/Step5'
import { Step6 } from './components/Step6'
import { Step7 } from './components/Step7'
import { Step8 } from './components/Step8'

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
      {selectedIndex === 3 && <Step3 />}
      {selectedIndex === 4 && <Step4 />}
      {selectedIndex === 5 && <Step5 />}
      {selectedIndex === 6 && <Step6 />}
      {selectedIndex === 7 && <Step7 />}
      {selectedIndex === 8 && <Step8 />}
      {selectedIndex === 9 && <div>ToDo:这是我的第九个组件</div>}
      {selectedIndex === 10 && <div>ToDo:这是我的第十个组件</div>}
      {selectedIndex === 11 && <div>ToDo:这是我的第十一个组件</div>}
      {selectedIndex === 12 && <div>ToDo:这是我的第十二组件</div>}
    </div>
  )
}

export default App
