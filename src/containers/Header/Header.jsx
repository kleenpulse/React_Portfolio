import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";

import { ThemeContext } from "../../ThemeContext";
import { useState } from "react";
import { Suspense } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};
const Header = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { isDarkTheme } = React.useContext(ThemeContext);
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p">Hello, I am</p>
							<h1 className="h1">Vxrcel</h1>
						</div>
					</div>
					<div className="tag-cmp app__flex">
						<p className="p">Web Developer</p>
						<p className="p">Freelancer</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__header-img"
			>
				<Suspense fallback={<LoadingSpinner />}>
					<img src={images.profile} alt="avatar-model" />
				</Suspense>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={isDarkTheme ? images.overlayCircle : images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
			</motion.div>

			<motion.div
				className="app__header-circles"
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
			>
				{[images.flutter, images.redux, images.sass].map((icon, i) => (
					<div className="circle-cmp app__flex" key={`icon-${i}`}>
						<img src={icon} alt="icon" />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, "home");
