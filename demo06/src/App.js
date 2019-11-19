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
import { Step9 } from './components/Step9'
import { Step10 } from './components/Step10'
import { Step11 } from './components/Step11'
import { Step12 } from './components/Step12'
import { Step13 } from './components/Step13'
import { Step14 } from './components/Step14'
import { Step15 } from './components/Step15'
import { Step16 } from './components/Step16'

function App() {
  const list = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    18,
    19,
    20,
  ]
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
      {selectedIndex === 9 && <Step9 />}
      {selectedIndex === 10 && <Step10 />}
      {selectedIndex === 11 && <Step11 />}
      {selectedIndex === 12 && <Step12 />}
      {selectedIndex === 13 && <Step13 />}
      {selectedIndex === 14 && <Step14 />}
      {selectedIndex === 15 && <Step15 />}
      {selectedIndex === 16 && <Step16 />}
    </div>
  )
}

export default App
