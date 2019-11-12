import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MenuItem extends Component {
  
  constructor(props) {
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }

  // shouldComponentUpdate(nextProps,nextState) {
  //   if (nextProps.content !== this.props.content) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
  // }

  //如果组件第一次存在于DOM中，函数不会被执行
  //如果组件存在于DOM，函数才会被执行
  
  // componentWillReceiveProps() {
  //   console.log('component will receive props')
  // }

  render() { 
    return (  
      <li onClick={this.handleClick}>
        {this.props.content}
      </li>
    );
  }

  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}

MenuItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem:PropTypes.func
}
export default MenuItem;