import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrdersList extends Component {
  render() {
    const orders = this.props;
    return (
      <div>
        {orders.orders.map((order, i) =>
          <div key={i}>
            <Link to='/'>{order.orderNumber}</Link>
            <time>{order.date}</time>
            {order.vendor}
            {order.status}
            {order.name}
            <time>{order.expectedDeliveryDate}</time>
            {order.amount}
          </div>
        )}
      </div>
    );
  }
}

export default OrdersList;