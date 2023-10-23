import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CareerDetail = () => {
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
      <Link to="/careers">Back</Link>
    </div>
  );
};

export const careerDetailLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`http://localhost:4000/careers/${id}`);

  console.log(res);
  if (!res.ok) {
    throw new Error("Could not find that careers");
  }

  return res.json();
};

export default CareerDetail;
