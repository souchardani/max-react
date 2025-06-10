import { HEADERS } from "./data";

function InvestmentTable({ table }) {
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          {HEADERS.map((title) => (
            <td>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.map((row) => (
          <tr>
            {row.map((col) => (
              <td>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvestmentTable;
