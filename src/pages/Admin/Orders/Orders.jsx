import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const Orders = () => {
  return (
    <>
      <div class="w-full flex-grow p-6">
        <div className="flex justify-between items-center">
          <h1 class="text-3xl text-black pb-6">Orders</h1>
        </div>
        <div class="bg-white overflow-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Order ID
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Amount
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Phone
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Date
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Location
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              <tr>
                <td class="text-left py-3 px-4">#RQ0001</td>
                <td class="text-left py-3 px-4">$378</td>
                <td class="text-left py-3 px-4">Smith</td>
                <td class="text-left py-3 px-4">01732292996</td>
                <td class="text-left py-3 px-4">13 Aug, 2023</td>
                <td class="text-left py-3 px-4">Dhaka, Savar</td>
                <td class="text-left py-3 px-4">
                  <span className="font-semibold text-blue-900 py-1 px-2 rounded-full text-sm bg-blue-300">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td class="text-left py-3 px-4">#RQ0002</td>
                <td class="text-left py-3 px-4">$308</td>
                <td class="text-left py-3 px-4">Bash</td>
                <td class="text-left py-3 px-4">01732292997</td>
                <td class="text-left py-3 px-4">15 Aug, 2023</td>
                <td class="text-left py-3 px-4">Dhaka, Mohakhali</td>
                <td class="text-left py-3 px-4">
                  <span className="font-semibold text-green-900 py-1 px-2 rounded-full text-sm bg-green-200">
                    Accept
                  </span>
                </td>
              </tr>
              <tr>
                <td class="text-left py-3 px-4">#RQ0003</td>
                <td class="text-left py-3 px-4">$273</td>
                <td class="text-left py-3 px-4">Hojaifa</td>
                <td class="text-left py-3 px-4">01732292998</td>
                <td class="text-left py-3 px-4">16 Aug, 2023</td>
                <td class="text-left py-3 px-4">Dhaka, Mohakhali</td>
                <td class="text-left py-3 px-4">
                  <span className="font-semibold text-red-900 py-1 px-2 rounded-full text-sm bg-red-300">
                    Reject
                  </span>
                </td>
              </tr>
              <tr>
                <td class="text-left py-3 px-4">#RQ0004</td>
                <td class="text-left py-3 px-4">$465</td>
                <td class="text-left py-3 px-4">Bashar</td>
                <td class="text-left py-3 px-4">01732292990</td>
                <td class="text-left py-3 px-4">18 Aug, 2023</td>
                <td class="text-left py-3 px-4">Rajshahi, Talaimari</td>
                <td class="text-left py-3 px-4">
                  <span className="font-semibold text-lime-900 py-1 px-2 rounded-full text-sm bg-lime-300">
                    Processing
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Orders;
