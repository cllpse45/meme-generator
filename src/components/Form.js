import React from "react";

function Form() {
  const [firstName, setFirstName] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [isComputer, setIsComputer] = React.useState(false);

  const [status, setStatus] = React.useState("");

  function handleFirstName(event) {
    setFirstName(event.target.value);
    console.log(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

function handleIsComputer(event){
    setIsComputer(event.target.checked)
    console.log(event.target.checked)
}

function handleRadioButton(event){

    setStatus(event.target.value)
    console.log(event.target.value);

}


  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstName}
      />

      <input
        type="email"
        placeholder="email@email.com"
        value={email}
        onChange={handleEmail}
      />

    <input 
        type="checkbox"
        checked={isComputer}
        onChange={handleIsComputer}
    
    />

    <input 
    type="radio"
    value="fulltime"
    name="fulltime"
    checked={status}
    onChange={handleRadioButton}

    
    />

    </form>
  );
}

export default Form;
