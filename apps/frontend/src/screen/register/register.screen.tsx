import { useState } from "react";
import { Link } from "react-router-dom";
import type { IBaseFormInputEvent, IBaseFormSubmitEvent } from "../login";
import { registerUser } from "../../service";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e: IBaseFormInputEvent) => {
    setName(e.target.value as string);
  };

  const handleEmailChange = (e: IBaseFormInputEvent) => {
    setEmail(e.target.value as string);
  };

  const handlePasswordChange = (e: IBaseFormInputEvent) => {
    setPassword(e.target.value as string);
  };

  const handleConfirmPasswordChange = (e: IBaseFormInputEvent) => {
    setConfirmPassword(e.target.value as string);
  };

  const handleSubmit = async (e: IBaseFormSubmitEvent) => {
    e.preventDefault();
    const submitRegister = await registerUser({ name, email, password });

    if (!submitRegister.success) alert(submitRegister.message);
  
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <h2>RegisterScreen</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <br />
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterScreen;
