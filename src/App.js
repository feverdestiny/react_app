import React, { Component } from "react";
import "./App.css";
import { DatePicker } from "antd";

import "antd/dist/antd.css";

/**
 * 定时器执行
 *
 * @class Click
 * @extends {React.Component}
 */
class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentWillMount() {
    this.timeId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return <h1>hello,{this.state.date.toLocaleTimeString()}</h1>;
  }
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
    this.handerClick = this.handerClick.bind(this);
  }
  handerClick() {
    this.setState(prevState => ({
      isToggle: !prevState.isToggle
    }));
  }
  render() {
    return (
      <button onClick={this.handerClick}>
        {this.state.isToggle ? "NO" : "OFF"}
      </button>
    );
  }
}

class NumberList extends React.Component {
  constructor(props) {
    super(props);
    let arr = [1, 2, 3, 4, 5, 6];
    let list = arr.map(item => <li key={item.toString()}>hello,{item}</li>);
    console.log(list);
    this.state = {
      list: list
    };
  }

  render() {
    // return <ul>{this.state.list}</ul>;
    return <DatePicker />;
  }
}

let element = (
  <div>
    <NumberList />
  </div>
);
class App extends Component {
  render() {
    return element;
  }
}

export default App;
