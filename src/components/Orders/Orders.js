import React, { Component } from 'react';
import EmptyOrdersList from "../EmptyOrdersList/EmptyOrdersList";
import OrdersList from '../OrdersList/OrdersList';

class Orders extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    fetch('http://localhost:4000/po')
    .then(response => response.json())
    .then(data => {
      this.setState({
        orders: data
      })
    });
  }

  render() {
    const { orders } = this.state;
    const hasOrders = orders.length;
    const baseClassName = 'po_list__container';

    return (
      <div className={ hasOrders ? baseClassName : ''} >
        <div className={ 'po_list__header__container' } >
          <span className={ `${baseClassName}_header_` }><input type="checkbox"/></span>
          <span className={ `${baseClassName}_header__Order` }>Order #</span>
          <span className={ `${baseClassName}_header_Date` }>Date </span>
          <span className={ `${baseClassName}_header_Vendor` }>Vendor </span>
          <span className={ `${baseClassName}_header_Status` }>Status</span>
          <span
            className={ `${baseClassName}_header_ExpectedDeliveryDate` }>
            Expected Delivery Date
          </span>
          <span className={ `${baseClassName}_header_Amount` }>Amount</span>
        </div>
        {
          hasOrders ? <OrdersList orders={ orders } /> : <EmptyOrdersList />
        }
      </div>
    );
  }
}

export default Orders;