import React ,{Component} from "react";
import Title from "../Title";
import Product from "./Product";
import DataContext  from '../../../contexts/DataContext';
import DataProvider from '../../Provider/DataProvider' 
import './style-product.css'
import {
  Button,
  ButtonGroup,
} from 'reactstrap';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = DataContext;
  
  render() {
    const productsList = this.context.storeProducts;
    const handle = this.context.handle
    return (
      <div className="productsList">
        <div className="card-header">
          <i className="fas fa-align-center"></i>
            List products
          </div>
        <Title name="Our" title="products" />
        <ButtonGroup className="mr-2 btn-group-page">
          <Button>&larr;</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>&rarr;</Button>
        </ButtonGroup>

        <div className="row products-list">
          {productsList.map((product) => {
            return (
           <Product data= {product} handle= {handle}/>
           );
          }
          )}
        </div>

        <ButtonGroup className="mr-2 btn-group-page">
          <Button>&larr;</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>&rarr;</Button>
        </ButtonGroup>

      </div>
   
    );
  }
}
