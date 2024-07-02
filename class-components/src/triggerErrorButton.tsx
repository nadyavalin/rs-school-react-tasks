import React from "react";

export class TriggerErrorButton extends React.Component {
  throwError = () => {
    console.error("Error triggered!");
    throw new Error("Simulated error");
  };

  render() {
    return (
      <div>
        <button onClick={this.throwError}>Trigger Error</button>
      </div>
    );
  }
}
