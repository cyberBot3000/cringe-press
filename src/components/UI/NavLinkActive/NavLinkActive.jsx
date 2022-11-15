import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkActive = ({
    to,
	className,
	activeClassName = "active",
	inactiveClassName = "",
	children,
}) => {
	return (
		<NavLink
            to={to}
			className={({ isActive }) => {
				let baseClass = className;
				if (isActive) {
					return `${baseClass} ${activeClassName}`;
				}
				return `${baseClass} ${inactiveClassName}`;
			}}

            end
		>
			{children}
		</NavLink>
	);
};

export default NavLinkActive;
