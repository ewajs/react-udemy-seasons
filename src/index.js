import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./index.css";

// Function Based Component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Hi there</div>;
// };

// Class Based Component
class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     // Only for initialization you can assign values directly
  //     // to the state property of the instantiated object.
  //     this.state = { lat: null, errorMessage: "" };
  //   }

  // Alternate state initialization w/o constructor
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Always use this.setState({ ... }) to update state
        this.setState({ lat: position.coords.latitude });
        // Never assign directly to the state property
        // this.state.lat = position.coords.latitde;
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  // Helper method to avoid conditionals in render method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <Spinner message="Please accept location request" />;
    }
  }

  render() {
    return (
      <div>
        <div className="ui attached message message-center">
          <p>This will always be rendered</p>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
