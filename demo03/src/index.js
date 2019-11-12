import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

function tick() {
  const element = (
    <div>
      <h1>Hello,World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element,document.getElementById('root'))
}

setInterval(tick,1000)


