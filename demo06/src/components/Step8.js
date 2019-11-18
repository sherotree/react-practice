import React, { Component } from 'react'
export class Step8 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

  handleAdd(e) {
    this.setState(preState => ({
      list: preState.list.concat(this.state.text),
      text: '',
    }))
  }

  removeItem(index) {
    const list = this.state.list
    list.splice(index, 1)
    this.setState({ list })
  }

  render() {
    return (
      <div>
        <h1>TODO List</h1>
        <input value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Add</button>
        <ol>
          {this.state.list.map((item, index) => {
            return (
              <li key={index + item}>
                <span>{item}</span>
                <button onClick={() => this.removeItem(index)}>Delete</button>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}
