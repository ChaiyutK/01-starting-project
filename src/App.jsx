import { useState } from "react";
import RowResult from "./components/RowResult";
import UserInput from "./components/UserInput";
import { formatter,calculateInvestmentResults } from "./util/investment";

function deriveUserInvestment(userInvestment,inputValue,label){
    return(
      {...userInvestment,
        [label]:inputValue
      }
    )
}

function App() {

  const [userInvestment, setUserInvestment] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const [result,setResult] = useState(calculateInvestmentResults(userInvestment));
  //let result = [];

  //console.log(formatter.format(1000))

  function handleChangeInvestment(inputValue,label){

    const dataInvest = deriveUserInvestment(userInvestment,inputValue,label)

    setUserInvestment(dataInvest)
    setResult(calculateInvestmentResults(dataInvest));
    //result = calculateInvestmentResults(userInvestment);
   
    
  
  }


  return (
    <>
    <UserInput userInput={userInvestment} onChangeInvestment={handleChangeInvestment} />
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
          {result.map(year=>(<RowResult key={year.year} resultOnInvest={year}/>))}
          
        </tbody>
      </table>
    </>
  );
}

export default App
