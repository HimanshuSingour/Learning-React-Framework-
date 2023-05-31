import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, descriptions, urlimage, url } = this.props;

    return (
      <div className="my-5">
        <div className="card" style={{ width: "27rem", height: "10" }}>
          <img src={urlimage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-dark fw-bold">{title}...</h5>
            <p className="card-text">{descriptions}</p>
            <a href={url} target="_blank" className="btn btn-warning">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
