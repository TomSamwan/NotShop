import { useState, useEffect } from "react";
import "../App.css";

export default function Home() {
  const [message, setMessage] = useState("");

  const fetchAPIData = async () => {
    fetch("http://localhost:8080/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(`error: ${error}`));
    console.log(message)
  };

  useEffect(() => {
    fetchAPIData();
  }, []);


  return (
    <>
      <h1>This is the home page!</h1>
      <p>{message}</p>
    </>
  );
}
