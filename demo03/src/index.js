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
//     function UserGreeting(props) {
//       return <h1>Welcome back!</h1>
//     }

//     function GuestGreeting(props) {
//       return <h1>Please sign up.</h1>
//     }

//     function Greeting(props) {
//       const isLoggedIn = props.isLoggedIn;
//       if (isLoggedIn) {
//         return <UserGreeting />;
//       }
//       return <GuestGreeting />;
//     }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }

// class LoginControl extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { isLoggedIn: false }
//     this.handleLoginClick = this.handleLoginClick.bind(this)
//     this.handleLogoutClick = this.handleLogoutClick.bind(this)
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn:true})
//   }
  
//   handleLogoutClick() {
//     this.setState({isLoggedIn:false})
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     )
//   }
// }

//     ReactDOM.render(
//       <LoginControl />,
//       document.getElementById('root')
//     )

//  6666666
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello,dear:</h1>
//       {
//         unreadMessages.length > 0 && 
//         <h2>you have {unreadMessages.length} unread messages.</h2>
//       }
//     </div>
//   )
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// )

// 7777777
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//     return (
//       <div className='warning'>
//         WARNING!
//       </div>
//     );
//   }


// class Page extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = { showWarning: true }
//     this.handleToggleClick=this.handleToggleClick.bind(this)
//     }

//   handleToggleClick() {
//     this.setState(state => ({
//       showWarning:!this.state.showWarning
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'HIDE' : 'SHOW'}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// )


// 88888888

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { value: '' }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleChange(event) {
//     this.setState({
//       value:event.target.value
//     })
//   }

//   handleSubmit(event) {
//     alert('提交的名字：' + this.state.value)
//     event.preventDefault();
//   }


//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           名字：
//           <input type='text' value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type='submit' value='提交' />
//       </form>
//     )
//   }
// }

// ReactDOM.render(
//   <NameForm />,document.getElementById('root')
// )


// 9999999

// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props) 
//     this.state = {
//       value:'撰写一篇关于你喜欢的 React 文章。'
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(event) {
//     this.setState({
//       value:event.target.value
//     })
//   }

//   handleSubmit(event) {
//     alert('提交的文章名字' + this.state.value)
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           文章：
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type='submit' value='提交' />
//       </form>
//     )
//   }
// }

// ReactDOM.render(
//   <EssayForm />,document.getElementById('root')
// )


// AAAAAAA

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value:'apple'
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange=this.handleChange.bind(this)
//   }

//   handleChange(event) {
//     this.setState({
//       value:event.target.value
//     })
//   }

//   handleSubmit(event) {
//     alert('我最喜欢的口味是： ' + this.state.value)
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           选择你喜欢的风味：
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value='grape'>葡萄</option>
//             <option value='apple'>苹果</option>
//             <option value='cherry'>樱桃</option>
//             <option value='mango'>芒果</option>
//           </select>
//         </label>
//         <input type='submit' value='提交' />
//       </form>
//     )
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,document.getElementById('root')
// )


// BBBBBBB

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state={temperature:'',scale:'c'}
  }

  handleCelsiusChange(temperature) {
    this.setState({scale:'c',temperature})
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale:'f',temperature})
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit=scale==='c'?tryConvert(temperature,toFahrenheit):temperature
    return (
      <div>
        <TemperatureInput scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

const scaleNames = {
  c: 'Celsius',
  f:'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state={temperature:''}
  }

  handleChange(event) {
    // this.setState({temperature:event.target.value})
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit-32)*5/9
}

function toFahrenheit(celsius) {
  return (celsius*9/5)+32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

ReactDOM.render(
  <Calculator />,document.getElementById('root')
)