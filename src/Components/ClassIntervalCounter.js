import React, { Component } from "react";

class ClassIntervalCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(`Setting the setInterval`);
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return <h2>{this.state.count}</h2>;
  }
}

export default ClassIntervalCounter;
