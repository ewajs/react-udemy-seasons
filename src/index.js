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
  constructor(props) {
    super(props);
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Always use this.setState({ ... }) to update state
        this.setState({ lat: position.coords.latitude });
        // Never assign directly to the state property
        // this.state.lat = position.coords.latitde;
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
