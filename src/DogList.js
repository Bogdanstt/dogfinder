import React, { Component } from "react";
import "./DogList.css";
import { Link } from "react-router-dom";

class Doglist extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.history.push(`/dogs/${evt.target.alt}`);
  }
  render() {
    return (
      <div className="DogList">
        <h1 className="text-center display-2 my-4">Dog List</h1>
        <div className="row">
          {this.props.dogs.map((d) => (
            <div className="Dog  col-lg-4 text-center" key={d.name}>
              <img src={d.src} alt={d.name} onClick={this.handleClick}></img>
              <h3>
                <Link className="underline" to={`/dogs/${d.name}`}>
                  {d.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Doglist;
