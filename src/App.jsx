import UserInput from "./components/UserInput";
function App() {
  return (
    <>
    <UserInput />
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App
