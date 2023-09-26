/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};
		if (message) {
			setLoading(true);
			setTimeout(() => {
				client.create(contact).then(() => {
					setLoading(false);
					setIsFormSubmitted(true);
				});
			}, 2000);
		} else {
			{
			}
		}
	};

	return (
		<>
			<h2 className="head-text"> Take a coffee & chat with me </h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.mobile} alt="mobile" />
					<a href="tel: +2348116342888" className="p-text">
						+234 811 634 2888
					</a>
				</div>

				<div className="app__footer-card">
					<img src={images.email} alt="email" />
					<a href="mailto:skyeparagon@gmail.com" className="p-text">
						hello Vxrcel
					</a>
				</div>
			</div>
			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							name="name"
							placeholder="Your Name"
							value={name}
							onChange={handleChangeInput}
							required
						/>
					</div>
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							name="email"
							placeholder="Your email"
							value={email}
							onChange={handleChangeInput}
							required
						/>
					</div>

					<div>
						<textarea
							name="message"
							id="msg"
							placeholder="Your Message"
							value={message}
							onChange={handleChangeInput}
							required
						></textarea>
					</div>

					<button
						type="button"
						className={`p-text ${loading && "sending"}`}
						onClick={handleSubmit}
					>
						{loading ? (
							<div className="loading">Sending...</div>
						) : (
							"Send Message"
						)}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank You For Getting in Touch</h3>
				</div>
			)}{" "}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
