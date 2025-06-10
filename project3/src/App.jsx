import Header from "./components/Header";
import UserInput from "./components/UserInput";
import InvestmentTable from "./components/InvestmentTable";
import { useState } from "react";

function App() {
  const [investmentTable, setInvestmentTable] = useState([
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ]);

  return (
    <div>
      <Header></Header>
      <UserInput></UserInput>
      <InvestmentTable table={investmentTable}></InvestmentTable>
    </div>
  );
}

export default App;
