import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  state = {
    counter: 0
  }

  addCount(e) {
    console.log(e)
    this.setState({ counter: this.state.counter + 1 })
  }

  render () {
    return(
      <div style = { styles.displaybox }>
        <div style = { styles.counterNum }>
          { this.state.counter } Missiles Launched
        </div>
        <div>
          <Button style = { styles.counterBtn } onClick={ (e) => { this.addCount(e) } } >
            Launch More!
          </Button>
        </div>
      </div>
    )
  }
}

const styles = {
  displaybox: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#FF304F',
    color: '#ECECDA',
    fontFamily: 'Times',
    padding: 100,
    textAlign: 'center'
  },
  counterNum: {
    fontSize: '10vw'
  },
  counterBtn: {
    backgroundColor: '#118DF0',
    color: '#ECECDA',
    fontSize: '4vw',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    padding: '2vw'
  }
}
export default App
