import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
    return <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            my-app
            <ul className="navbar-nav">
      <li class="nav-item">
        <NavLink className="nav-link" to="/" exact>Главная</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/about">Информация</NavLink>
      </li>
    </ul>
        </div>
    </nav>
}