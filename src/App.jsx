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
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const [result,setResult] = useState([]);
  //let result = [];

  //console.log(formatter.format(1000))

  function handleChangeInvestment(inputValue,label){
    
    setUserInvestment((prevUserInvest) => {
      const updatedUserInvestment = 
      {...prevUserInvest,
        [label]:inputValue
      }
      return updatedUserInvestment;
    });

    setResult(calculateInvestmentResults(userInvestment));
    //result = calculateInvestmentResults(userInvestment);
    console.log(userInvestment);
    
  
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
          {result.map(year=>(<RowResult key={year.year} resultOnInvest={year}/>))}
          
        </tbody>
      </table>
    </>
  );
}

export default App
