import { Link } from "react-router-dom";

function Invoice() {
  return (
    <div>
      Invoice routes
      <Link to="/" style={{ display: "block" }}>
        go back
      </Link>
    </div>
  );
}

export default Invoice;
