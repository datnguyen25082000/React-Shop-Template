import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style-product.css'

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.data
    };
  }
  render() {
    return (
      <div className=" p-3 col-12 col-md-6 col-lg-3 product-item ">
        <div className='card'>
        <Link
          to="/detail"
          onClick={() => this.props.handle.getDetail(this.state.product.id)}
        >
          <img
            className="card-img"
            src={this.state.product.img}
            alt="phoneImage"
          />
          <div className="card-body">
            <h5 className="card-title">{this.state.product.title}</h5>
            <p className="price">{this.state.product.price + "$"}</p>
          </div>
        </Link>

        <div className="btn-in-picture">
          <button onClick={() => this.props.handle.addCart(this.state.product.id)}>
            <i className="fas fa-cart-plus cart-icon" />
          </button>
        </div>
        </div>
      </div>
    );
  }
}
