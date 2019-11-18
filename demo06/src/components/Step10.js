import React, { useState } from 'react'

export function Step10() {
  const [status, setStatus] = useState('无效')

  const [seconds, setSeconds] = useState('')
  const [time, setTime] = useState(0)

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

  function formatTime(time) {
    const hour = parseInt(time / (1000 * 60 * 60))
    const minute = parseInt((time - hour * 1000 * 60 * 60) / (1000 * 60))
    const second = parseInt(time / 1000) % 60
    const milliSecond = parseInt(time % 1000)
    return `${hour}:${minute}:${second}:${milliSecond}`
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
      <div>{`当前状态:${status}`}</div>

      {(status === '无效' || status === '准备') && (
        <input onChange={onSecondsChange} type="number" value={seconds} />
      )}

      {(status !== '准备' || status !== '无效') && (
        <div style={{ background: 'red' }} onClick={handleStart}>
          开始
        </div>
      )}

      {status === '开始' && (
        <div style={{ background: 'pink' }} onClick={handleStop}>
          暂停
        </div>
      )}

      <div style={{ background: 'lightblue' }} onClick={handleReset}>
        重置
      </div>
    </div>
  )
}
