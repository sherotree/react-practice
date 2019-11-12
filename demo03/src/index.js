import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { userInfo } from 'os';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName: 'harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello,{formatName(user)}
//   </h1>
// );

// class Clock extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {date:new Date()}
//   }

//   componentDidMount() {
//     this.timerId = setInterval(
//       () => this.tick(), 1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timeId);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello,World!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
  
// }


//   ReactDOM.render(
//     <Clock />,
//     document.getElementById('root'))




// function Welcome(props) {
//   return <h1>Hello,{props.name}</h1>
// };

// function App1() {
//   return (
//     <div>
//       <Welcome name='zhangsan' />
//       <Welcome name='lisi' />
//       <Welcome name='wangwu' />
//     </div>
//   )
// };

// ReactDOM.render(<App1 />, document.getElementById('root'));

class Toggle extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn:!state.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn?'ON':'OFF'}
      </button>
    
    )
  }
}

ReactDOM.render(<Toggle />,document.getElementById('root'))


