import React, { Component } from 'react'
class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    this.toToggle=this.toToggle.bind(this)
  }
  render() {
    return (
      <div>
        <div className={this.state.isShow?'show':'hidden'}>Boss级人物-孙悟空</div>
        <div><button onClick={this.toToggle}>召唤Boss</button></div>
      </div>
    )
  }

  toToggle() {
    this.setState({
      isShow:this.state.isShow ? false:true
    })
  }
}

export default Boss