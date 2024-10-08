import RowResult from "./components/RowResult";
import UserInput from "./components/UserInput";
import { formatter,calculateInvestmentResults } from "./util/investment";

function App() {

  console.log(formatter.format(1000))

  function handleChangeInvestment(userInvestment){
    const resultInvestment = calculateInvestmentResults(userInvestment);
    console.log(resultInvestment);
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
