import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

import LoadingSpinner from "../../components/LoadingSpinner";

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 });
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimatedCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimatedCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};
	console.log(filterWork);
	return (
		<>
			<h2 className="head-text ">
				My Creative
				<span> Portfolio</span> Section
			</h2>

			<div className="app__work-filter">
				{["UI/UX", "Web App", "Next JS", "React JS", "All"].map((item, i) => (
					<div
						key={i}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animatedCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 place-content-center place-items-center"
			>
				{filterWork.map((work, i) => (
					<div className="app__work-item app__flex " key={i}>
						<div className="app__work-img app__flex">
							<div className="flex justify-center items-center w-full relative">
								{isLoading && (
									<div className="absolute z-50">
										<LoadingSpinner />
									</div>
								)}
								<img
									src={urlFor(work.imgUrl)}
									alt={work.name}
									onLoad={() => {
										setTimeout(() => {
											setIsLoading(false);
										}, 2000);
									}}
								/>
							</div>

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
								className="app__work-hover app__flex"
							>
								<a href={work.projectLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.3 }}
										className="app__flex"
									>
										<AiFillEye title="view Code" />
									</motion.div>
								</a>
								<a href={work.codeLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.3 }}
										className="app__flex"
									>
										<AiFillGithub title="view Project" />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className="app__work-content app__flex">
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>

							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, "app__works"),
	"work",
	"app__primarybg"
);
