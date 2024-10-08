import { useState } from "react";
import RowResult from "./components/RowResult";
import UserInput from "./components/UserInput";
import { formatter,calculateInvestmentResults } from "./util/investment";

function App() {

  const [userInvestment, setUserInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  //console.log(formatter.format(1000))

  function handleChangeInvestment(inputValue,label){
    
    setUserInvestment({
      ...userInvestment,
      [label]: inputValue,
    });

    console.log(calculateInvestmentResults(userInvestment));
  
  
  }
 

  return (
    <>
    <UserInput onChangeInvestment={handleChangeInvestment} />
      <table id="result" className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Insvestment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <RowResult />
        </tbody>
      </table>
    </>
  );
}

export default App
