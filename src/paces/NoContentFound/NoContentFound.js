import { Link } from "react-router-dom";

const NoContentFound = () => {
  return (
    <div className="container">
      <div className="nothingFound">
        <h1>404 not found</h1>
        <Link to="/products">Continue shopping</Link>
      </div>
    </div>
  );
};

export default NoContentFound;
