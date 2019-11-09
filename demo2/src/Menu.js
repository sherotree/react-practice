import React, { Component, Fragment } from 'react'
import MenuItem from './MenuItem'

class Menu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list:['麻辣烫','西红柿炒鸡蛋','辣椒炒肉']
    }
  } 
  
  render() {
    return (
      <Fragment>
        {/* 注释 */}
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (

                <MenuItem content={item} key={item + index} index={index}
                  deleteItem={this.deleteItem.bind(this)}/>

              )


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

  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list:list
    })
  }

}
 // <li key={index + item}>{item}</li>
export default Menu