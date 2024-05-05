import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Class</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Karan (class)"} location={"Mumbai (class)"} />
      </div>
    );
  }
}

export default About;
