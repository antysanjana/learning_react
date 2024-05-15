//Render method
import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { render, children } = this.props;
    const { count } = this.state;
    return render
      ? render(count, this.incrementCount)
      : children(count, this.incrementCount);
  }
}
