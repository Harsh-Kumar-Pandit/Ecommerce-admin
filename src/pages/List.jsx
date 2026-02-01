import axios from "axios";
import React from "react";
import { useState } from "react";
import backendUrl from "../../config/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + "/api/product/remove", {id}, {headers: {token}});
  
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  useEffect(() => {
    fetchList();
  },[]);
  return (<>
<div className="bg-white rounded-2xl border mt-[-50px] border-gray-200 shadow-sm">
  <div className="flex items-center justify-between px-6 py-4 border-b">
    <h2 className="text-lg font-semibold text-gray-900">
      All Products
    </h2>
    <span className="text-sm text-gray-500">
      Total: {list.length}
    </span>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse">
      <thead className="sticky top-0 bg-gray-50 z-10">
        <tr className="border-b text-gray-600 uppercase tracking-wide text-xs">
          <th className="p-3 text-left">Image</th>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Category</th>
          <th className="p-3 text-left">Bestseller</th>
          <th className="p-3 text-right">Price</th>
          <th className="p-3 text-center">Action</th>
        </tr>
      </thead>

      <tbody>
        {list.map((item) => (
          <tr
            key={item._id}
            className="border-b hover:bg-gray-50 transition group"
          >
            {/* Image */}
            <td className="p-3">
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="h-12 w-12 rounded-lg border object-cover bg-gray-100"
              />
            </td>

            <td className="p-3 font-medium text-gray-900">
              {item.name}
            </td>

            <td className="p-3 text-gray-600">
              {item.category} / {item.subCategory}
            </td>

            <td className="p-3">
  <span
    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold
      ${item.bestseller
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-600"
      }`}
  >
    {item.bestseller ? "Yes" : "No"}
  </span>
</td>


            <td className="p-3 text-right font-semibold text-gray-900">
              ${item.price}
            </td>

            {/* Actions */}
            <td className="p-3 text-center">
              <div className="flex justify-center gap-3 transition">
                {/* <button className="text-xs text-blue-600 hover:underline">
                  Edit
                </button> */}
                <button onClick={() => removeProduct(item._id)} className="text-xs text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}

        {list.length === 0 && (
          <tr>
            <td
              colSpan="6"
              className="p-6 text-center text-gray-500"
            >
              No products found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>
</>

  );
};

export default List;
