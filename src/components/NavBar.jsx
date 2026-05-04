import { NavLink } from "react-router";


export default function NavBar(){

	return <nav>
		<ul>
			<li>
				<NavLink className={({isActive}) => isActive ? "navbar-active" : ""} to="/">Home</NavLink>
			</li>
			<li>
				<NavLink className={({isActive}) => isActive ? "navbar-active" : ""} to="/about">About</NavLink>
			</li>
			<li>
				<NavLink className={({isActive}) => isActive ? "navbar-active" : ""} to="/contact">Contact</NavLink>
			</li>
		</ul>
	</nav>
}