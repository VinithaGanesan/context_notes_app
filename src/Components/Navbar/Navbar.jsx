import React from 'react'
import { AuthenticatedRoutes } from '../../Routes'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ route }) {
  return (
    <div className="sidebar-container">
    <div className="login-container">
        <img src="https://cdn-icons-png.flaticon.com/512/5087/5087607.png" className="card-img-top" alt="userid" />
        <div className="user-id">
            <div><b>John Doe</b></div>
            <div>johndoe@gmail.com</div>
        </div>
    </div>
    <div className="nav-container">
        {
            AuthenticatedRoutes.children.map((route, index) => (
                <div className="icon-link nav-link">
                    <NavLink
                        key={`${route.name}-${index}`}
                        to={route.path}
                        style={({ isActive }) => ({
                            className: isActive
                                ? "active"
                                : "nonactive",
                            color: isActive ? "#F5F5F5" : "#203562",
                        })}
                    >
                        <i className={route.className}></i>
                        {route.name}
                    </NavLink>

                </div>
            ))
        }
    </div>
</div>
  )
}
