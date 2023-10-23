import React, { useState } from "react";
import { createAdminUser } from "../../../../apiCall/apiCall";

const AddUser = ({ showModal, setShowModal }) => {
  // Initial State Start
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  // Initial State End

  // Error Msg Start
  const [errName, setErrName] = useState("");
  const [errRole, setErrRole] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");

  // Event Handler Start
  const handleName = (e) => {
    setName(e.target.value);
    setErrName("");
  };
  const handleRole = (e) => {
    setRole(e.target.value);
    setErrRole("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };

  // Event Handler End
  // Email Validation start
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // Email Validation End

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name) {
      setErrName("Enter your name");
    }
    if (!role) {
      setErrRole("Enter Role");
    }
    if (!email) {
      setErrEmail("Enter your email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid email");
      }
    }
    if (!phone) {
      setErrPhone("Enter your phone number");
    }
    if (!password) {
      setErrPassword("Create a password");
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
      }
    }
    if (!address) {
      setErrAddress("Enter your address");
    }
    // Getting the value
    if (
      name &&
      role &&
      phone &&
      EmailValidation(email) &&
      password &&
      password.length >= 6 &&
      address
    ) {
      const data = {
        name,
        role,
        phone,
        email,
        password,
        address,
      };
      console.log(data);

      createAdminUser(data);

      setName("");
      setRole("");
      setEmail("");
      setPhone("");
      setPassword("");
      setAddress("");
    }
  };

  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add User</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="w-full lgl:w-[500px] flex">
                    <div className="px-6 w-full flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                      <div className="flex flex-col gap-3">
                        {/* client name */}
                        <div className="flex flex-col gap-.5">
                          <p className="font-titleFont text-base font-semibold text-gray-600">
                            Full Name
                          </p>
                          <input
                            onChange={handleName}
                            value={name}
                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                            type="text"
                            placeholder="eg. John Doe"
                          />
                          {errName && (
                            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                              {errName}
                            </p>
                          )}
                        </div>
                        {/* Role */}
                        <div className="flex flex-col gap-.5">
                          <p className="font-titleFont text-base font-semibold text-gray-600">
                            Role
                          </p>
                          <select
                            id="countries"
                            class="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                            onChange={handleRole}
                          >
                            <option selected>Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="author">Author</option>
                            <option value="editor">Editor</option>
                          </select>
                          {errRole && (
                            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                              {errRole}
                            </p>
                          )}
                        </div>
                        {/* Email */}
                        <div className="flex flex-col gap-.5">
                          <p className="font-titleFont text-base font-semibold text-gray-600">
                            Work Email
                          </p>
                          <input
                            onChange={handleEmail}
                            value={email}
                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                            type="email"
                            placeholder="john@workemail.com"
                          />
                          {errEmail && (
                            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                              {errEmail}
                            </p>
                          )}
                        </div>
                        {/* Phone Number */}
                        <div className="flex flex-col gap-.5">
                          <p className="font-titleFont text-base font-semibold text-gray-600">
                            Phone Number
                          </p>
                          <input
                            onChange={handlePhone}
                            value={phone}
                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                            type="text"
                            placeholder="008801234567891"
                          />
                          {errPhone && (
                            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                              {errPhone}
                            </p>
                          )}
                        </div>
                        {/* Password */}
                        <div className="flex flex-col gap-.5">
                          <p className="font-titleFont text-base font-semibold text-gray-600">
                            Password
                          </p>
                          <input
                            onChange={handlePassword}
                            value={password}
                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                            type="password"
                            placeholder="Create password"
                          />
                          {errPassword && (
                            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                              {errPassword}
                            </p>
                          )}
                        </div>
                        {/* Address */}
                        <div className="flex flex-col gap-.5">
                          <p className="font-titleFont text-base font-semibold text-gray-600">
                            Address
                          </p>
                          <input
                            onChange={handleAddress}
                            value={address}
                            className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                            type="text"
                            placeholder="road-001, house-115, example area"
                          />
                          {errAddress && (
                            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                              {errAddress}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-primeColor text-white active:bg-primeColor font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSignUp}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default AddUser;
