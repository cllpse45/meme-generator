import React from "react";

function Form() {
  const [firstName, setFirstName] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [isComputer, setIsComputer] = React.useState(false);

  const [status, setStatus] = React.useState("");

  const [select, setSelect] = React.useState("");

  function handleFirstName(event) {
    setFirstName(event.target.value);
    console.log(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  function handleIsComputer(event) {
    setIsComputer(event.target.checked);
    console.log(event.target.checked);
  }

  function handleRadioButton(event) {
    setStatus(event.target.value);
    console.log(event.target.value);
  }

  function handleSelect(event) {
    setSelect(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstName}
      />

      <br />

      <input
        type="email"
        placeholder="email@email.com"
        value={email}
        onChange={handleEmail}
      />

      <br />

      <input type="checkbox" checked={isComputer} onChange={handleIsComputer} />

      <br />
      <input
        type="radio"
        value="fulltime"
        name="fulltime"
        checked={status === "fulltime"}
        onChange={handleRadioButton}
      />
      <label>Full Time</label>

      <br />

      <input
        type="radio"
        value="parttime"
        name="parttime"
        checked={status === "parttime"}
        onChange={handleRadioButton}
      />
      <label>Part Time</label>

      <br />

      <input
        type="radio"
        value="freelance"
        name="freelance"
        checked={status === "freelance"}
        onChange={handleRadioButton}
      />
      <label>Freelance</label>

      <br />
    <label>Whats your favorite brand?</label>
      <select value={select} onChange={handleSelect} name="favBrand">
        <option value="bmw">BMV</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        <option value="honda">Honda</option>
        <option value="volvo">Volvo</option>
        <option value="seat">Seat</option>
      </select>

      <br/>

      <button> Submit</button>
    </form>
  );
}

export default Form;
