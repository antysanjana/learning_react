//Higher Order Component
/*import withCounter from "./HOC/withCounter";

const HoverCounter= (props)=>{
    const {count,incrementCount} = props;
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </div>
    )
}

export default withCounter(HoverCounter);*/

import React from "react";

export default class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount, theme } = this.props;
    const style =
      theme === "dark"
        ? { backgroundColor: "#000000", color: "#ffffff" }
        : null;
    return (
      <div>
        <h1 onMouseOver={incrementCount} style={style}>
          Hovered {count} times.
        </h1>
      </div>
    );
  }
}
