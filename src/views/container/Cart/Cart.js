import React from "react";
import Item from "./Item";
import Title from "../Title";
import DataContext  from '../../../contexts/DataContext';
import DataProvider from '../../Provider/DataProvider' 
import './style-cart.css'
import {
  Button,
  ButtonGroup,
} from 'reactstrap';


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0
    };
  }

  static contextType = DataContext;

  render() {
    const cart = this.context.cart;
    const handle = this.context.handle; 
    const total = this.context.total;

    return (
      <div className="row list-item">
         <div className="card-header col-12 mb-5">
           <i className="fas fa-cart-plus"></i>
            Cart
          </div>
        <Title name="Your" title="cart" />
        <div className="col-sm-12 col-md-10 col-md-offset-1">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Quantity</th>

                <th className="text-center">Price</th>
                <th className="text-center">Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
            {cart.map(product => (
                <Item
                  key={product.id}
                  data={product}
                  handle= {handle}
                />
              ))}
            </tbody>
          </table>
          <div className="total">
            <span className="font-weight-bold ">Total: </span>
            {total + "$"}
          </div>
        </div>
      </div>
    );
  }
}
