import { useState } from "react";
import type { IBaseFormInputEvent, IBaseFormSubmitEvent } from "./login.interfaces";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: IBaseFormInputEvent) => {
    setEmail(e.target.value as string);
  };

  const handlePasswordChange = (e: IBaseFormInputEvent) => {
    setPassword(e.target.value as string);
  };

  const handleSubmit = (e: IBaseFormSubmitEvent) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h2>LoginScreen</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default LoginScreen;
