import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "email") {
      setLoginData({
        ...loginData,
        email: { value, error: "" },
      });
    } else if (name === "password") {
      setLoginData({
        ...loginData,
        password: { value, error: "" },
      });
    }
  }

  //   function isFormValidated() {
  //     const formData = { ...loginData };
  //     let flag = true;
  //     if (!formData.email.value) {
  //       formData.email.error = "Email is mandatory";
  //       flag = false;
  //     }
  //     if (!formData.password.value) {
  //       formData.password.error = "Password is mandatory";
  //       flag = false;
  //     }

  //     setLoginData(formData);
  //     return flag;
  //   }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", loginData.email.value);
    setIsLoggedIn(true);
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ margin: "auto", alignContent: "center", height: "100vh" }}>
        <div className="text-center text-lg">Login</div>
        <div
          className="grid gap-6 mb-6 flex-1 w-[400px] m-auto mt-2"
          style={{
            padding: "30px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <div class="mb-3">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Email"
              required
              onChange={handleChange}
              value={loginData.email.value}
            />
            {loginData.email.error && (
              <label style={{ color: "red" }}>{loginData.email.error}</label>
            )}
          </div>

          <div class="mb-3">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Password"
              required
              onChange={handleChange}
              value={loginData.password.value}
            />
            {loginData.password.error && (
              <label style={{ color: "red" }}>{loginData.password.error}</label>
            )}
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
