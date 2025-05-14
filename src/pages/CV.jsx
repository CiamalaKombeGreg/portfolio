import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							CV
						</div>

						<div className="subtitle contact-subtitle">
							<p>
								Thank you for reading this portfolio if you did, I'm not
								the most active person on social media, so for any question,
								you can go end an email to
								&nbsp;{" "}
								<a href={`mailto:${INFO.main.email}`}>
									{INFO.main.email}
								</a>
								&nbsp;{" "}
								it might disappear in the future, in case I don't respond, you
								can send it to
								&nbsp;{" "}
								<a href={`mailto:twiiztayyt@gmail.com`}>
									twiiztayyt@gmail.com
								</a>
								. I make an effort to respond to all messages within
								24 hours, although it may take me longer during busy
								periods.
							</p>
							<p>There is the link to download my CV
								<a href={"https://pink-ynez-30.tiiny.site"}> here </a>
								in case you are interested.
							</p>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
