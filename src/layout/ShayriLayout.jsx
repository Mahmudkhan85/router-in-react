import React from "react";
import { Outlet } from "react-router-dom";

const ShayriLayout = () => {
  return (
    <div className="shayri">
      <h2>Hindi Shayri</h2>
      <p>Here are some beautiful Shayri in Hindi</p>
      <Outlet />
    </div>
  );
};

export default ShayriLayout;
