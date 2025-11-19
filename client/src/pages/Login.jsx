import { useState } from "react";

export default function Login() {
  const [users, setUsers] = useState([
    {
      user: "Tom",
      password: "123",
    },
    {
      user: "Bernie",
      password: "Floppy"
    }
  ]);

  const [inputs, setInputs] = useState({
    user: "Tom",
    password: "123",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleLogin(e) {
    e.preventDefault();
    let result = '';
    for(let check of users) {
      const obj = JSON.stringify(check)
      const i = JSON.stringify(inputs)

      if(obj == i) {
        result = JSON.parse(obj).user
        console.log(result)
        return result
      }
    }
    console.log(result && result)

    // checks if the username and password matches
    // any of the objects in the "users" array
    // and then logs the user in
  }

  return (
    <form key="1" onSubmit={(e) => handleLogin(e)}>
      <input
        onChange={(e) => handleChange(e)}
        name="user"
        type="text"
        placeholder="username"
        value={inputs.user}
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
