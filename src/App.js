import axios from "axios";
import {useState} from "react";
function App() {
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = () =>{
      const user = {
        username:username,
        password:password,
      }
      axios.post("http://localhost:4000/app/login", user)
      .then((response)=>{
          if(response.data === "Verified")
            console.log("Data verfied successfully");
          else  
            console.log("Data Not Verified");  
  })
      .catch(e => {console.log(e)});
  }
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
      <h3>Login:</h3>
      <label>UserName</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        style={{
          "margin-bottom": "10px",
        }}
      ></input>
      <label>Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
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
        onClick={()=>handleSubmit()}
      >
        SignIn
      </button>
      <button
        //onClick={event => window.location.href="/signUp"}
        style={{
          "background-color": "#f44336",
          color: "white",
          padding: "7px 12px",
          "text-align": "center",
          "text-decoration": "none",
          display: "inline-block",
        }}
      >
        Dont' have account? SignUp
      </button>
    </div>
  );
}

export default App;
