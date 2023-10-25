import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./About.scss";
import { urlFor, client } from "../../client";
import LoadingSpinner from "../../components/LoadingSpinner";

const About = () => {
	const [abouts, setAbouts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => setAbouts(data));
	}, []);

	return (
		<>
			<h2 className="head-text">
				I know that
				<span> Good Dev.</span>
				<br />
				means
				<span> Good Business</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, i) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__profile-item"
						key={about.title + i}
					>
						<div className="flex justify-center items-center w-full">
							{isLoading && <LoadingSpinner />}
							<img
								src={urlFor(about.imgUrl)}
								alt={about.title}
								onLoad={() => setIsLoading(false)}
							/>
						</div>
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, "app__about"),
	"about",
	"app__whitebg"
);
