import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/style.css";

const Nav = () => {
  return (
    <>
      <nav>
        <ul className='container'>
          <li>
            <a>
              <NavLink activeClassName="active" to="/home">
                HOME
              </NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
