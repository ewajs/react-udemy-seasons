import React from "react";
import ReactDOM from "react-dom";

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

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    if (!this.state.errorMessage && !this.state.lat) {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
