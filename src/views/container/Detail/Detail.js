import React from "react";
import Title from '../Title'
import DataContext  from '../../../contexts/DataContext';
import DataProvider from '../../Provider/DataProvider' ;
import '../Cart/style-cart.css'
import {
  Button,
  ButtonGroup,
} from 'reactstrap';


export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextType = DataContext;

  render() {
    const detail = this.context.detailProduct;
    const handle = this.context.handle;
    console.log(detail);
    return (
      <div className="bg-white detail-tag">
        <div className="card-header">
          <i className="fas fa-info-circle"></i>
            Detail product
          </div>

        <h1 className="detail-title mb-4">{detail.title}</h1>
        <div className="row">
          <div className="detail-img col-md-4 mb-3">
            <img src={detail.img} alt="imageProduct" />
          </div>
          <div className="detail-pro col-md-8">
            <div className="detail-info">
              <p>{detail.info}</p>
            </div>
            <div className="detail-company">
              <span className="font-weight-bold">Company product: </span>
              <span>{detail.company}</span>
            </div>
            <div className="detail-price">
              <span className="font-weight-bold">Price: </span>
              <span>{detail.price + "$"}</span>
            </div>
            <div className="addCart">
              <button
                className="mt-3 p-2 mb-3"
                onClick={() => handle.addCart(detail.id)}
              >
                <i className="fas fa-cart-plus mr-2" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
