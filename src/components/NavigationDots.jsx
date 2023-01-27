/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const NavigationDots = ({ active }) => {
	return (
		<div className="app__navigation">
			{["home", "about", "work", "skills", "testimonials", "contact"].map(
				(item, i) => (
					<a
						href={`#${item}`}
						// onClick={() => setToggle(false)}
						key={item + i}
						className="app__navigation-dot"
						style={
							active === item
								? {
										background: "linear-gradient(to right, #313bac, cyan)",
										border: "none",
										scale: "1.3",
								  }
								: {}
						}
					/>
				)
			)}
		</div>
	);
};

export default NavigationDots;
