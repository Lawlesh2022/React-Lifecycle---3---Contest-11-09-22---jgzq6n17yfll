import React from 'react'
import '../styles/App.css';

class Odd extends React.Component {
  //console.log("Even is unmounted")
  render() {
   console.log("Even is unmounted")
    return (
      <div id="odd">
        I am odd
      </div>
    )
  }
}

class Even extends React.Component {
//   console.log("Even is unmounted")
  render() {    
    return (
      <div id="even">
        I am even
      </div>
    )
  }
}
class App extends React.Component {
  handleChange(){
    this.setState({even: !this.state.even})
  }
  constructor(props){
    super(props)
    this.state = {even: true}
    this.handleChange =  this.handleChange.bind(this)
    console.log("Odd is unmounted")
  }
  render() {
    return (
      <div id="main">
        {this.state.even ? <Even /> : <Odd />}

        <button id="toggle" onClick={this.handleChange}>Change</button>
      </div>
    )
  }

}


export default App;
