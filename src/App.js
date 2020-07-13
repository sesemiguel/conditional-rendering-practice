import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {

  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    return (
      <>
        {this.state.isLoggedIn ? <h1>Logged in</h1> : <h1>Logged out</h1>}
        <button onClick={this.handleClick}>{this.state.isLoggedIn ? 'Logout' : 'Login'}</button>
      </>
    )
  }
}

export default App;
