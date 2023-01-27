import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div className="social-div">
				<a
					target="_blank"
					href="https://github.com/kleenpulse"
					rel="noreferrer"
				>
					<div>
						<BsGithub />
					</div>
				</a>
				<a
					target="_blank"
					href="https://codepen.io/skyegideon"
					rel="noreferrer"
				>
					<div>
						<FaCodepen />
					</div>
				</a>
				<a
					target="_blank"
					href="https://twitter.com/kleen_pulse"
					rel="noreferrer"
				>
					<div>
						<BsTwitter />
					</div>
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
