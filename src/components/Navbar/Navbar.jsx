import React, { useState } from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { GiKnifeFork as HiX } from "react-icons/gi";
import { RiMenu4Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ThemeContext";

const Navbar = () => {
	const { isDarkTheme } = React.useContext(ThemeContext);
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<a href="#home">
					<img src={images.logo} alt="logo" />
				</a>
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
				<div className="app__navbar-menu">
					<RiMenu4Fill onClick={() => setToggle(true)} />

					{toggle && (
						<motion.div
							whileInView={{ x: [250, 0] }}
							transition={{ duration: 0.9, ease: "easeOut" }}
						>
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
							{isDarkTheme && <section className="waves-div"></section>}
						</motion.div>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
