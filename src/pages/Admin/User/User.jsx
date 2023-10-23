import React, { useState } from "react";
import AddUser from "./Operations/AddUser";
import users from "../../../utils/users.json";
import { AiOutlineEye } from "react-icons/ai";
import UserDetails from "./Operations/UserDetails";

const User = () => {
  const [showModal, setShowModal] = useState(false);
  const [showUserDetailsModal, setShowUserDetailsModal] = useState(false);
  const [userId, setUserId] = useState("");

  // user details handler
  const handleUserDetails = (userId) => {
    setShowUserDetailsModal(true);
    setUserId(userId);
  };

  return (
    <>
      <div class="w-full flex-grow p-6">
        <div className="flex justify-between items-center">
          <h1 class="text-3xl text-black pb-6">Users</h1>
          <button
            className="bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer rounded shadow "
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add User
          </button>
        </div>
        <div class="bg-white overflow-auto">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Image
                </th>

                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Role
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Status
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Created At
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="text-gray-700">
              {users.map((user, index) => (
                <tr key={index}>
                  <td class="text-left py-3 px-4">
                    <div class="flex-shrink-0 w-10 h-10">
                      <img
                        class="w-full h-full rounded-full"
                        src={user.src}
                        alt={user.name}
                      />
                    </div>
                  </td>
                  <td class="text-left py-3 px-4">{user.name}</td>
                  <td class="text-left py-3 px-4">{user.role}</td>
                  <td class="text-left py-3 px-4">{user.status}</td>
                  <td class="text-left py-3 px-4">{user.createdAt}</td>
                  <td class="text-left py-3 px-4">
                    <button
                      className="bg-primeColor w-[35px] h-[25px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer rounded shadow "
                      type="button"
                      onClick={() => handleUserDetails(user.id)}
                    >
                      <AiOutlineEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddUser showModal={showModal} setShowModal={setShowModal} />
      <UserDetails
        userId={userId}
        showModal={showUserDetailsModal}
        setShowModal={setShowUserDetailsModal}
      />
    </>
  );
};

export default User;
