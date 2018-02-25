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

    return (
      <div>
        {
          hasOrders ? <OrdersList orders={ orders } /> : <EmptyOrdersList />
        }
      </div>
    );
  }
}

export default Orders;