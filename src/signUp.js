import axios from "axios";
import { useState } from "react";
import { useContextProvider } from "./contextProvider";

function SignUp() {
  const [isUserAdded, setUserisAdded] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const {
    state,
    dispatcher: { addEmailId, addUserName },
  } = useContextProvider();

  console.log("State--> ", state);

  const handleSubmit = () => {
    const user = {
      username: username,
      password: password,
      email: email,
    };
    axios
      .post("http://localhost:4000/app/signup", user)
      .then(() => {
        console.log("Data added successfully");
        setUserisAdded(true);
      })
      .catch((e) => {
        console.log(e);
        setUserisAdded(false);
      });
  };
  return (
    <div
      className="signup_form"
      style={{
        display: "flex",
        "flex-direction": "column",
        margin: "auto",
        "margin-top": "20%",
        padding: "5px",
        "padding-top": "0px",
        width: "20%",
        border: "1px solid black",
      }}
    >
      <h3>SignUp:</h3>
      <label>UserName</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          addUserName(e.target.value);
        }}
        style={{
          "margin-bottom": "10px",
        }}
      ></input>
      <label>Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          addEmailId(e.target.value);
        }}
        style={{
          "margin-bottom": "10px",
        }}
      ></input>
      <label>Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          "margin-bottom": "10px",
        }}
      ></input>
      <button
        id="submit"
        style={{
          "margin-bottom": "10px",
          "background-color": "green",
          color: "white",
          padding: "7px 12px",
          "text-align": "center",
          "text-decoration": "none",
          display: "inline-block",
        }}
        onClick={() => handleSubmit()}
      >
        SignUp
      </button>
      <button
        disabled={!isUserAdded}
        style={{ padding: "10px" }}
        onClick={() => (window.location.href = "/userDetails")}
      >
        Check User Details
      </button>
    </div>
  );
}

export default SignUp;
