import React, { Component,Fragment } from 'react'

class Menu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '菜单',
      list:[]
    }
  } 

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button>增加服务</button>
        </div>
        <ul>
          <li>糖醋排骨</li>
          <li>宫保鸡丁</li>
        </ul>
      </Fragment>
    )
  }
  inputChange(e) {
    console.log(this)
    this.setState({
      inputValue:e.target.value
    })

  }
}

export default Menu