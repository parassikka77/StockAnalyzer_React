import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function HomePage() {
  useEffect(() => {
    toast.success("Welcome Hooman!");
  }, []);
  return (
    <div className="jumbotron">
      <h1>Choose View!</h1>
      <p>Select the way you want to study your stock in.</p>
      <Link to="chart" className="btn btn-primary btn-lg">
        Chart
      </Link>
      {"  "}
      <Link to="table" className="btn btn-primary btn-lg">
        Table
      </Link>
    </div>
  );
}

export default HomePage;
