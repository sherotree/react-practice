import React, { Component, Fragment } from 'react'

class Menu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '炒菜',
      list:['蚂蚁上树','西红柿炒鸡蛋']
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addList.bind(this)}>增加菜品</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (<li key={item+index}>{item}</li>)
            })
          }
        </ul>
      </Fragment>
    )
  }

  inputChange(e) {
    this.setState({
      inputValue:e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue:''
    })
  }
}

export default Menu