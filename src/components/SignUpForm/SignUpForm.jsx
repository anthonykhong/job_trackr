import React, { useState } from "react";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm({ setUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { error, confirm, ...data } = formData;
      const user = await signUp(data);
      setUser(user);
    } catch (error) {
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const disable = formData.password !== formData.confirm;

  return (
    <div className="flex justify-center items-center">
      <div className="form-container">
        <form
          className="bg-neutral-600 shadow-md bg-opacity-75 rounded-lg px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="font-display flex justify-center font-extrabold text-white text-xl pb-5">
            Create Account
          </h2>
          <label className="block text-white font-bold mb-2 pt-2">
            Username
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="pepperlatte"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="block text-white font-bold mb-2 pt-2">Email</label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            placeholder="Darell@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="block text-white font-bold mb-2 pt-2">
            Password
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="block text-white font-bold mb-2 pt-2">
            Confirm Password
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-center pt-4">
            <button
              type="submit"
              className="border bg-neutral-600 bg-opacity-50 text-white rounded-lg py-2 px-4 hover:bg-neutral-800"
            >
              <span className="font-display">Sign Up</span>
            </button>
          </div>
          <p className="error-message">&nbsp;{formData.error}</p>
        </form>
      </div>
    </div>
  );
}
