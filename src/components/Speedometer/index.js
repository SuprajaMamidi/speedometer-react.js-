// Write your code here
import {Component} from 'react'
import './index.css'

class speedometer extends Component {
  state = {count: 0}
  onIncrease = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }
  onDecrease = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="speedometer"
        />
        <p className="speed">speed is {count}mph</p>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <button type="button" className="accButton" onClick={this.onIncrease}>
          Accelerate
        </button>
        <button type="button" className="brakeButton" onClick={this.onDecrease}>
          Apply brake
        </button>
      </div>
    )
  }
}
export default speedometer
