import { Link } from "react-router-dom";

function Expenses() {
  return (
    <div>
      Expenses routes
      <Link to="/" style={{ display: "block" }}>
        go back
      </Link>
    </div>
  );
}

export default Expenses;
