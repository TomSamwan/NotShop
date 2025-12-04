import { useState } from "react";
import { handleLogin } from "../utils/api";


export default function Login() {
  const [inputs, setInputs] = useState({
    user: "Tom",
    email: "email@gmail.com",
    password: "123",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form key="1" onSubmit={(e) => handleLogin(e, inputs)}>
      <input
        onChange={(e) => handleChange(e)}
        name="name"
        type="text"
        placeholder="username"
        value={inputs.user}
      />
      <input
        onChange={(e) => handleChange(e)}
        name="email"
        type="email"
        placeholder="email"
        value={inputs.email}
      />
      <input
        onChange={(e) => handleChange(e)}
        name="password"
        type="password"
        placeholder="password"
        value={inputs.password}
      />
      <button>Login</button>
    </form>
  );
}
