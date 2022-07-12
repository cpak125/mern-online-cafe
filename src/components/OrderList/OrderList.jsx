import OrderListItem from '../OrderListItem/OrderListItem';
import './OrderList.css';

export default function OrderList({ orders, activeOrder, handleSelectOrder }) {
  const orderList = orders.map(o =>
    <OrderListItem
      order={o}
      isSelected={o === activeOrder}
      handleSelectOrder={handleSelectOrder}
      key={o._id}
    />
  );
  return (
    <main className="OrderList">
      {orderList.length ?
        orderList
        :
        <span className="no-orders">No Order History</span>
      }
    </main>
  );
}