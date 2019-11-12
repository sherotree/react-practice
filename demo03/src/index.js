import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello,{formatName(user)}
  </h1>
);

ReactDOM.render(element, document.getElementById('root'));


