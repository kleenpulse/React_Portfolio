import React, { useState } from "react";
import "./Navbar.scss";

import { GiKnifeFork as HiX } from "react-icons/gi";
import { RiMenu4Fill } from "react-icons/ri";
import { motion } from "framer-motion";
// import { ThemeContext } from "../../ThemeContext";

const Navbar = () => {
	// const { isDarkTheme } = React.useContext(ThemeContext);
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<a href="#home">Vxrcel</a>
			</div>
			<ul className="app__navbar-links">
				{["home", "about", "work", "skills", "contact"].map((item) => (
					<li key={`link-${item}`} className="app__flex p-text">
						<div></div>
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
			<div className="mobile-menu">
				{!toggle && (
					<div className="app__navbar-menu">
						<RiMenu4Fill onClick={() => setToggle(true)} />
					</div>
				)}
				{toggle && (
					<motion.div
						whileInView={{ x: [250, 0] }}
						transition={{ duration: 0.9, ease: "easeOut" }}
						className="app__navbar-mobile "
					>
						<div>
							<HiX onClick={() => setToggle(false)} />
							<ul>
								{["home", "about", "work", "skills", "contact"].map((item) => (
									<li key={item} className="app__flex p-text">
										<a href={`#${item}`} onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				)}
			</div>
			{toggle && (
				<section className="waves-div" onClick={() => setToggle(false)} />
			)}
		</nav>
	);
};

export default Navbar;
