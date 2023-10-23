import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Register } from "../../../apiCall/apiCall";

const SignUp = () => {
  // Initial State Start
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [checked, setChecked] = useState(false);
  // Initial State End

  // Error Msg Start
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");

  // Event Handler Start
  const handleName = (e) => {
    setName(e.target.value);
    setErrClientName("");
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
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
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
    if (checked) {
      if (!name) {
        setErrClientName("Enter your name");
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
      if (!city) {
        setErrCity("Enter your city name");
      }

      // Getting the value
      if (
        name &&
        phone &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city
      ) {
        const data = {
          name,
          email,
          email,
          password,
          address,
          city,
        };
        console.log(data);
        Register(data);

        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
        setCity("");
      }
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
          <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
              Create your account
            </h1>
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
                {errClientName && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    {errClientName}
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
                  placeholder="01780674597"
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
              {/* City */}
              <div className="flex flex-col gap-.5">
                <p className="font-titleFont text-base font-semibold text-gray-600">
                  City
                </p>
                <input
                  onChange={handleCity}
                  value={city}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  type="text"
                  placeholder="Your city"
                />
                {errCity && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    {errCity}
                  </p>
                )}
              </div>
              {/* Checkbox */}
              <div className="flex items-start mdl:items-center gap-2">
                <input
                  onChange={() => setChecked(!checked)}
                  className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                  type="checkbox"
                />
                <p className="text-sm text-primeColor">
                  I agree to the BASH{" "}
                  <span className="text-blue-500">Terms of Service </span>and{" "}
                  <span className="text-blue-500">Privacy Policy</span>.
                </p>
              </div>
              <button
                onClick={handleSignUp}
                className={`${
                  checked
                    ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                    : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
              >
                Create Account
              </button>
              <p className="text-sm text-center font-titleFont font-medium">
                Don't have an Account?{" "}
                <Link to="/signin">
                  <span className="hover:text-blue-600 duration-300">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
