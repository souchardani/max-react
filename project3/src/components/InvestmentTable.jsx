import { HEADERS } from "./data";
import { formatter } from "../util/investment";

function InvestmentTable({ table }) {
  function calculateTable(table) {
    let totalInterest = 0;
    let investmentCapital = 0;
    const newTable = table.map((row) => {
      totalInterest += row.interest;
      investmentCapital = row.valueEndOfYear - row.interest;
      return {
        ...row,
        totalInterest: totalInterest,
        investmentCapital: investmentCapital,
      };
    });

    return newTable;
  }

  let newTable = calculateTable(table);

  return (
    <table id="result" className="center">
      <thead>
        <tr>
          {HEADERS.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {newTable.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.totalInterest)}</td>
            <td>{formatter.format(row.investmentCapital)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvestmentTable;
