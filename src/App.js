import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    userName: 'kapil.chokhawala'
  }

  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.userNameChangedHandler} 
          currentName={this.state.userName}/>
        <UserOutput 
          userName={this.state.userName}/>
      </div>
    );
  }
}

export default App;
