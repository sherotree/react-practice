import React, { Component } from 'react'
import { directive } from '@babel/types'
import { unlink } from 'fs'
//import React from 'react'
//const Component = React.Component

class App extends Component{
  render() {
    return (
      <ul className='my-list'>
        <li>{false?'11111':'55555'}</li>
        <li>22222</li>
      </ul>
    )
    // var child1 = React.createElement('li', null, '33333')
    // var child2 = React.createElement('li', null, '44444')
    // var root = React.createElement('ul',{className:'my-list'},child1,child2)
  }
}

export default App