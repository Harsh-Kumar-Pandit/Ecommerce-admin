import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import backendUrl from '../../config/api'
import axios from 'axios'
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const Order = ({token}) => {

  const [orders, setOrders] = useState([])

  const fetchallOrders = async () => {

    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, {headers:{token}})
      if (response.data.success) {        
        setOrders(response.data.orders.reverse())
      } else{
        toast.error(response.data.message);
      }
      
      

    } catch (error) {
        toast.error(error.message);
    
    }
  }

  const statusHandler = async ( event, orderId ) => {
    try {
      
    
    const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:event.target.value}, {headers:{token}})

    if (response.data.success) {
      await fetchallOrders()
    }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    console.log(orders);
    
    fetchallOrders()
  }, [token])
  return (
    <div className="w-full p-2 -mt-7.5">
      <h2 className="text-xl font-semibold mb-4">Order Page</h2>

      
{
  orders.map((order) => (
    
<div key={order._id} className="border rounded-lg p-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">            <div className="flex gap-4">
          <div className="w-14 h-14 border rounded flex items-center justify-center">
            <img src={assets.parcel_icon} alt="" />
          </div>

          <div>
            <p className="font-medium">
             {order.items?.[0]?.name} X {order.items?.[0]?.size}
            </p>
            <p className="text-sm font-semibold mt-1">{order.address.firstName}</p>
            <p className="text-sm text-gray-600">
             {order.address.street},<br />
              {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
            </p>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-1">
          <p>Items :{order.items?.[0]?.quantity}</p>
          <p>Method : {order.paymentMethod}</p>
      <p>Payment : {order.payment ? "Done" : "Pending"}</p>

          <p>Date : {new Date(order.date).toLocaleDateString()}</p>

        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <p className="font-semibold text-lg">${order.amount}</p>
          <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="border rounded px-3 py-1 text-sm">
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
        </div>
  ))

}
        

      </div>
  );
}

export default Order
