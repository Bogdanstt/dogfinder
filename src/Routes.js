import Doglist from "./DogList";
import DogDetail from "./DogDetail";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

class Routes extends Component {
  render() {
    const getDog = (props) => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        (dog) => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetail {...props} dog={currentDog} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={(routeProps) => (
            <Doglist dogs={this.props.dogs} {...routeProps} />
          )}
        />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs"></Redirect>
      </Switch>
    );
  }
}

export default Routes;
