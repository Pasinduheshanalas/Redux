import React, { Component, useState } from 'react'

export default class Hooks_container1 extends Component {
    

  render() {
    const [stateValue, setValue] = useState(0);

    incrementValue = () => {
        setValue(this.setState+1);

    decrementValue = () => {
         setValue(this.setState-1);
    }
    return (
      <div>React Hooks
        <br/>
        <button onClick={() => incrementValue()}>In Local State</button>
        <button onClick={() => decrementValue()}>In Local State</button>
        <div>
            <p>Local State: {stateValue}</p>
        </div>
      </div>
    )
  }
}
}