import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About componentDidMount");
  }
  render() {
    console.log("About render");
    return (
      <div>
        <h1>About Class</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Karan (class)"} location={"Mumbai (class)"} />
      </div>
    );
  }
}

export default About;
