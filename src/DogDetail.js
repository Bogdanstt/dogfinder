import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogDetail.css";
class DogDetail extends Component {
  render() {
    let { dog } = this.props;
    return (
      <div className="DogDetail row justify-content-center mt-5">
        <div className="col-11 col-lg-5">
          <div className="DogDetail-card card text-center">
            <img className="card-img-top" src={dog.src} alt={dog.name}></img>
            <div className="card-body">
              <h2 className="card-title">{dog.name}</h2>
              <h4 className="card-subtitle text-muted">{dog.age} years old</h4>
            </div>
            <ul className="list-group list-group-flush">
              {dog.facts.map((fact, idx) => (
                <li className="list-group-item" key={idx}>
                  {fact}
                </li>
              ))}
            </ul>
            <div className="card-body">
              <Link className="btn btn-info" to="/dogs">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogDetail;
