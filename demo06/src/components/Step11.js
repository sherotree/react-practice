import React, { Component } from 'react'

export class Step11 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '无效',
      seconds: '',
      time: 0,
    }
  }

  onSecondsChange = e => {
    let value = e.target.value
    this.setState({
      seconds: value,
      time: value * 1000,
    })

    if (Number(value) > 0) {
      this.setState({ status: '准备' })
    } else {
      this.setState({
        status: '无效',
      })
    }
  }

  handleStart = () => {
    this.setState({ status: '开始' })
    this.interval = setInterval(() => {
      if (this.state.time - 16 > 0) {
        this.setState(preState => ({ time: preState.time - 16 }))
      } else {
        this.setState({ time: 0, status: '无效', seconds: '' })
        clearInterval(this.interval)
      }
    }, 16)
  }

  handleStop = () => {
    this.setState({
      status: '暂停',
    })
    clearInterval(this.interval)
  }

  handleReset = () => {
    this.setState({ status: '重置', seconds: '', time: 0 })
    clearInterval(this.interval)
  }

  formatTime = time => {
    const hour = parseInt(time / (1000 * 60 * 60))
    const minute = parseInt((time - hour * 1000 * 60 * 60) / (1000 * 60))
    const second = parseInt((time / 1000) % 60)
    const millisecond = parseInt(time % 1000)
    return `${hour}:${minute}:${second}:${millisecond}`
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { status, seconds, time } = this.state

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
        <div>{this.formatTime(time)}</div>
        <div>{`当前状态:${status}`}</div>

        {(status === '无效' || status === '准备') && (
          <input
            onChange={this.onSecondsChange}
            type="number"
            value={seconds}
          />
        )}

        {(status === '准备' || status === '暂停') && (
          <div style={{ background: 'red' }} onClick={this.handleStart}>
            开始
          </div>
        )}

        {status === '开始' && (
          <div style={{ background: 'pink' }} onClick={this.handleStop}>
            暂停
          </div>
        )}

        <div style={{ background: 'green' }} onClick={this.handleReset}>
          重置
        </div>
      </div>
    )
  }
}
