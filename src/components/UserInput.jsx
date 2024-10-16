import { useState } from "react";

export default function UserInput({onChangeInvestment,userInput}) {
  /* const [userInvestment, setUserInvestment] = useState({
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

  } */

  //console.log(userInvestment);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Intial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) => {
              onChangeInvestment(+event.target.value,"initialInvestment");
            }}
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) => {
              onChangeInvestment(+event.target.value,"annualInvestment");
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
            value={userInput.expectedReturn}
            onChange={(event) => {
              onChangeInvestment(+event.target.value,"expectedReturn");
            }}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => {
              onChangeInvestment(+event.target.value,"duration");
            }}
            required
          />
        </p>
      </div>
    </section>
  );
}
