import React, {Component} from 'react';
import DataContext from '../../contexts/DataContext'
import { storeProducts, detailProduct } from "../../containers/data";

class DataProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
          storeProducts: storeProducts,
          detailProduct: detailProduct,
          cart: [],
          total: 0
        };
      }

      handleGetDetail = productId => {
        const newDetail = this.state.storeProducts.find(c => c.id === productId);
        this.setState({ detailProduct: newDetail });
      };
    
      handleAddCart = productId => {
        const newItem = this.state.storeProducts.find(c => c.id === productId);
        const newCart = this.state.cart;
    
        if (newItem.inCart === false) {
          newItem.inCart = true;
          newItem.count = 1;
          newItem.total = newItem.price;
          newCart.push(newItem);
          this.handleUpdateTotal();
        }
        this.setState({ cart: newCart });
      };
    
      handleChangeNumber = (productId, evt) => {
        const item = this.state.storeProducts.find(c => c.id === productId);
        const newCart = this.state.cart;
        const value = evt.target.value;
        item.count = parseInt(value, 10);
        item.total = value * item.price;
        this.handleUpdateTotal();
        this.setState({ cart: newCart });
      };
    
      handleRemoveItem = productId => {
        const item = this.state.storeProducts.find(c => c.id === productId);
        item.inCart = false;
        item.count = 0;
        item.total = 0;
        const newCart = this.state.cart.filter(d => d.id !== productId);
    
        this.setState({ cart: newCart });
        this.handleUpdateTotal();
      };
    
      handleUpdateTotal = () => {
        let total = 0;
        const newCart = this.state.cart;
        newCart.forEach(element => {
          total += element.price * element.count;
        });
        this.setState({ total });
      };

    render() { 
        console.log(this.state.cart);
        return ( 
            <DataContext.Provider value={{
                storeProducts: this.state.storeProducts,
                detailProduct: this.state.detailProduct,
                cart: this.state.cart,
                total: this.state.total,
                handle: {addCart: this.handleAddCart, 
                        getDetail: this.handleGetDetail, 
                        updateTotal: this.handleUpdateTotal, 
                        removeItem: this.handleRemoveItem,
                        changeNumber: this.handleChangeNumber
                    }
                }}>

                {this.props.children}
            </DataContext.Provider>
         );
    }
}
 
export default DataProvider;