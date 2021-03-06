import { Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Link to="/invoices" style={{ display: "block" }}>
        invoices
      </Link>
      <Link to="/expenses" style={{ display: "block" }}>
        expenses
      </Link>
    </div>
  );
}
