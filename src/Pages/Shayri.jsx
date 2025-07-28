import React from "react";
import { useLoaderData } from "react-router-dom";

const Shayri = () => {
  const ShayriData = useLoaderData();
  return (
    <div>
      {ShayriData.map((shayri) => {
        return (
          <div className="Shayri_box">
            <div className="single_shayri_box">
              <span>{shayri.id}</span>
              <p>{shayri.quote}</p>
              <h2>{shayri.writer}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shayri;

export const ShayriLoader = async () => {
  const response = await fetch("http://localhost:5000/shayri");
  return response.json();
};
