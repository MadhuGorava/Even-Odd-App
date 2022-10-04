// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}

  onIncrement = () => {
    this.setState(curState => ({
      count: Math.ceil(Math.random() * 100),
      text: curState.count % 2 === 0 ? 'Even' : 'Odd',
    }))
  }

  render() {
    const {count, text} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          <div>
            <p className="heading">Count is {text}</p>
            <button type="button" onClick={this.onIncrement}>
              Increment
            </button>
            <p>*Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
