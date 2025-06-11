import Header from "./components/Header";
import UserInput from "./components/UserInput";
import InvestmentTable from "./components/InvestmentTable";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investmentTable, setInvestmentTable] = useState([]);

  function handleSubmit(formObject) {
    const tableData = calculateInvestmentResults(formObject);
    const newTableData = [...tableData];
    setInvestmentTable(newTableData);
  }

  return (
    <div>
      <Header></Header>
      <UserInput handleSubmit={handleSubmit}></UserInput>
      <InvestmentTable table={investmentTable}></InvestmentTable>
    </div>
  );
}

export default App;
