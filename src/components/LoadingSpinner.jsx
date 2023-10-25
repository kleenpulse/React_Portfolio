import React from "react";
import { ThemeContext } from "./../ThemeContext";

const LoadingSpinner = () => {
	const { isDarkTheme } = React.useContext(ThemeContext);
	return (
		<div className="relative h-9 w-9 ">
			<div
				className={`animate-loadspin rounded-full border-4 border-r-transparent border-b-transparent ${
					isDarkTheme ? "border-white" : "border-black"
				} border-solid h-12 w-12 absolute `}
			/>

			<div
				className={` rounded-full border-4  ${
					isDarkTheme ? "border-white/20" : "border-black/20"
				} border-solid h-12 w-12`}
			/>
		</div>
	);
};

export default LoadingSpinner;
