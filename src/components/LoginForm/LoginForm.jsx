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
          className="bg-neutral-600 bg-opacity-75 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="font-display flex justify-center font-extrabold text-white text-xl pb-5">
            Login
          </h2>
          <label className="block text-white font-bold mb-2 pt-2">Email</label>
          <input
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow bg-transparent appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <div className="flex items-center justify-center pt-4">
            <button
              type="submit"
              className="border bg-neutral-600 bg-opacity-50 text-white rounded-lg py-2 px-4 hover:bg-neutral-800"
            >
              <span className="font-display">Log In</span>
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
