import React, { Component,Fragment } from 'react'

class Menu extends Component{
  render() {
    return (
      <Fragment>
        <div> <input /> <button>增加服务</button></div>
        <ul>
          <li>糖醋排骨</li>
          <li>宫保鸡丁</li>
        </ul>
      </Fragment>
    )
  }
}

export default Menu