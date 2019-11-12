import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { userInfo } from 'os';

//  1111111111

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

// 222222222

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

// 333333333

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


// 44444444

// class Toggle extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { isToggleOn: true }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn:!state.isToggleOn
//     }))
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn?'ON':'OFF'}
//       </button>
    
//     )
//   }
// }

// ReactDOM.render(<Toggle />,document.getElementById('root'))

// 55555555
    function UserGreeting(props) {
      return <h1>Welcome back!</h1>
    }

    function GuestGreeting(props) {
      return <h1>Please sign up.</h1>
    }

    function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false }
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLoginClick() {
    this.setState({isLoggedIn:true})
  }
  
  handleLogoutClick() {
    this.setState({isLoggedIn:false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

    ReactDOM.render(
      <LoginControl />,
      document.getElementById('root')
    )


