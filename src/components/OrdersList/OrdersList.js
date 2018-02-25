import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './OrdersList.css';

class OrdersList extends Component {
  render() {
    const orders = this.props;
    const baseClassName = 'po_list__item';
    return (
      orders.orders.map((order, i) =>
        <div key={i} className={ `${baseClassName}` }>
          <span className={` `}>
            <input type="checkbox"/>
          </span>

          <span className={ `${baseClassName}__link` }>
            <Link to={`/order/${order.orderNumber}`}>{order.orderNumber}</Link>
          </span>

          <span className={`${baseClassName}__date`}>
            <time>{order.date}</time>
          </span>

          <span className={`${baseClassName}__vendor`}>{order.vendor}</span>
          <span
            className={ `po_status ${baseClassName}_status__${order.status.replace(/\s/g, "")}` }>
            {order.status}
          </span>

          <span className={`${baseClassName}__expectedDeliveryDate`}>
            <time>{order.expectedDeliveryDate}</time>
          </span>

          <span className={ `${baseClassName}__amount` }>&#8377;{order.amount}</span>
        </div>
      )
    );
  }
}

export default OrdersList;