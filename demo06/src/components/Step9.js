import React, { useState } from 'react'
export function Step9() {
  // status 是一个枚举类型，总共取个值 ‘DISABLED’,'START','STOP','READY'
  const [status, setStatus] = useState('无效')

  //倒计时⏳
  const [seconds, setSeconds] = useState('')
  const [time, setTime] = useState(0)

  function formatTime(time) {
    const hour = parseInt(time / (1000 * 60 * 60))
    const minute = parseInt((time - hour * (1000 * 60 * 60)) / (1000 * 60))
    const second = parseInt(time / 1000) % 60
    const millisecond = time % 1000
    return `${hour}:${minute}:${second}:${millisecond}`
  }
  function onSecondsChange(e) {
    setSeconds(e.target.value)
    setTime(e.target.value * 1000)
    if (Number(e.target.value) > 0) {
      setStatus('准备')
    } else {
      setStatus('无效')
    }
  }

  function handleStart() {
    setStatus('开始')
  }

  function handleStop() {
    setStatus('暂停')
  }

  function handleReset() {
    setStatus('无效')
    setSeconds('')
    setTime(0)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '200px',
        weight: '200px',
        justifyContent: 'space-between',
      }}
    >
      <div>{formatTime(time)}</div>
      {/* 设置type为number后就不能输入其他字符了 */}
      <input onChange={onSecondsChange} type="number" value={seconds} />
      <div>{`当前状态：${status}`}</div>
      <div onClick={handleStart}>开始</div>
      <div onClick={handleStop}>暂停</div>
      <div onClick={handleReset}>重置</div>
    </div>
  )
}
