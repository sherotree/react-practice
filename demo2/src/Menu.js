import React, { Component, Fragment } from 'react'
import MenuItem from './MenuItem'
import axios from 'axios'

class Menu extends Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list:['麻辣烫','西红柿炒鸡蛋','辣椒炒肉']
    }
  } 
  
  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    axios.post('https://baidu.com')
    .then((res)=>{console.log('数据获取成功'+JSON.stringify(res))})
    console.log('component did mounted')
  }

  shouldComponentUpdate() {
    console.log('should component update')
    return true
  }
  
  componentWillUpdate() {
    console.log('component will update')
  }

  componentDidUpdate() {
    console.log('component did update')
  }

  render() {
    console.log('component is rendering')
    return (
      <Fragment>
        {/* 注释 */}
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}
            ref={(input)=>{this.input=input}}/>
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
  inputChange() {
    this.setState({
      // inputValue:e.target.value
      inputValue:this.input.value
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

// npm install axios  写入node_modules  不会写入依赖package.json
// npm install -g axios  安装到全局 prefix里设置到哪儿安装到哪儿
// npm install -save axios 写入node_modules 写入依赖package.json 生产环境
// npm install -save-dev axios 开发环境