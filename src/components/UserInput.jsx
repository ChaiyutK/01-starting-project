import { useState } from "react";

export default function UserInput({onChangeInvestment}) {
  const [userInvestment, setUserInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleUserChange(event, label) {
    setUserInvestment({
      ...userInvestment,
      [label]: +event.target.value,
    });
    
    onChangeInvestment(userInvestment);

  }

  //console.log(userInvestment);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Intial Investment</label>
          <input
            type="number"
            onChange={(event) => {
              handleUserChange(event, "initialInvestment");
            }}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) => {
              handleUserChange(event, "annualInvestment");
            }}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            onChange={(event) => {
              handleUserChange(event, "expectedReturn");
            }}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => {
              handleUserChange(event, "duration");
            }}
            required
          />
        </p>
      </div>
    </section>
  );
}
