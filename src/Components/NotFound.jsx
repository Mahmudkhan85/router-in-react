import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not_found">
      <h2>404 | Not Found Page</h2>
      <button onClick={() => navigate("/")}>Go to home page</button>
    </div>
  );
};

export default NotFound;
