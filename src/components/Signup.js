import React from "react";
import "../styles/Signup.css";

function Signup() {
  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  const [checkBox, setCheckBox] = React.useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handlePasswordConfirm(event) {
    setPasswordConfirm(event.target.value);
  }


  function handleCheckBox(event){
    setCheckBox(event.target.checked);
  }


function handleSubmit(event){
    event.preventDefault();
    if(password === passwordConfirm){
        alert("Successfully Registered");   
    }else{
        alert("Passwords do not match");
    }
}

  return (
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="form--input"
            value={email}
            onChange={handleEmail}
            name="email"
          />

          <input
            type="password"
            placeholder="Password"
            className="form--input"
            name="password"
            value={password}
            onChange={handlePassword}
          />

          <input
            type="password"
            placeholder="Password Confirm"
            className="form--input"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={handlePasswordConfirm}
          />

        <input 
            type="checkbox"
            name="newsletter"
            checked={checkBox}
            onChange={handleCheckBox}
        />

        <label>I want to join newsletter</label>

        <button className="form--submit">Submit</button>

        </form>
      </div>
    </>
  );
}

export default Signup;
