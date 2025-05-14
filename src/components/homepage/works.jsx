import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./colryut.svg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Colryut</div>
							<div className="work-subtitle">
								Student job
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="./Rush Labs Logo.svg"
								alt="Rush Labs"
								className="work-image"
							/>
							<div className="work-title">Rush Labs</div>
							<div className="work-subtitle">
								Intern
							</div>
							<div className="work-duration">February - May | 2025</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
