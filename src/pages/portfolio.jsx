import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/articles.css";

const Portfolio = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="portfolio" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
						</div>

						<h2>Summary</h2>

						<table className="styled-table">
								<thead>
									<tr>
										<th>Activity</th>
										<th>Theme</th>
										<th>Valued Hours</th>
										<th>Real Hours</th>
									</tr>
								</thead>
							<tbody>
								<tr>
									<td>Hackathon 2024</td>
									<td>Electronics & development</td>
									<td>10</td>
									<td>25 - 30</td>
								</tr>
								<tr>
									<td>Cyber security Challenge 2024</td>
									<td>Security</td>
									<td>10</td>
									<td>10 - 15</td>
								</tr>
								<tr>
									<td>Colryut | Student job</td>
									<td>Social</td>
									<td>10</td>
									<td>372</td>
								</tr>
								<tr>
									<td>LaTex lab</td>
									<td>Software operation</td>
									<td>6</td>
									<td>6</td>
								</tr>
								<tr>
									<td>Emergency training</td>
									<td>Healthcare</td>
									<td>0</td>
									<td>12</td>
								</tr>
								<tr>
									<td>Discussion on microsoft tools & cloud 2024</td>
									<td>Software operation & cloud</td>
									<td>2</td>
									<td>3</td>
								</tr>
								<tr className="total">
									<td>Total</td>
									<td></td>
									<td>38</td>
									<td>428</td>
								</tr>
							</tbody>
						</table>

						<div className="articles-container">
							<div className="articles-wrapper">
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/portfolio/" + (index + 1)}
										/>
									</div>
								))}
							</div>
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

export default Portfolio;
