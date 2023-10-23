import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()

  const defaultPageHandler = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
        cupiditate ad nostrum doloribus iste tempora quisquam excepturi
        repellat, fugit cumque dolore magni possimus inventore neque provident!
        Sunt, quo eos?
      </p>
      <p>
        Go to the <NavLink to="/">Root Page</NavLink>.
      </p>
      <button onClick={defaultPageHandler}>Root Page</button>
    </div>
  );
};

export default NotFound;
