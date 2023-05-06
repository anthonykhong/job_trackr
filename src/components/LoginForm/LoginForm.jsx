import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div>
        <form
          className="bg-neutral-300 bg-opacity-75 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="flex justify-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-orange-600 text-xl pb-5">
            Login
          </h2>
          <label className="block text-white font-bold mb-2 pt-2">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label className="block text-white font-bold mb-2 pt-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-center pt-4">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-300 to-orange-600 group-hover:from-purple-300 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              type="submit"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-orange-500 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 group-hover:text-white">
                Log In
              </span>
            </button>
          </div>
          <div className="flex justify-center font-display pt-2 text-white">
            <p className="error-message">&nbsp;{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
