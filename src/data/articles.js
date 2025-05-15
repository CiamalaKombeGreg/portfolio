import React from "react";
import DisplayCard from "../components/articles/DisplayCard";

function article_1() {
	return {
		date: "October 25, 2024 - October 27, 2024",
		title: "Hackathon 2024",
		description:
			"This year, the school made an Hackathon on electronics subjects, it's time to create new tools using old and depraved ones.",
		keywords: [
			"Hackathon 2024",
			"hackathon electronic",
			"Ephec Hackathon",
			"Ciamala Kombe hackathon",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.displayImage {
					max-width: 100%;
					height: auto;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					transition: transform 0.2, box-shadow 0.2s;	
				}
				
				.styled-image-hover {
					transform: scale(1.05);
					box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
				}
				
				.paragraph {
					margin: 16px;
					font-size: 16px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<DisplayCard hour="10" date="October 25, 2024 - October 27, 2024" expert="L. VAN DORMAEL" website="https://www.ephec.be/actualites/hackathon-2024-faire-du-neuf-avec-de-lancien" />
					<div className="paragraph">
						<p>I had the chance to participate to my first Hackathon that year, it was a pretty great experience. I learned a bit on electronic and also improved my coordination with people.</p>
						<p>However, the most important point was how people from my group weren't from the same bachelor or degree, it make things more real as we all worked on things we were the best at.</p>
						<p>For example, I mainly focused on programming our record player meaning I had my pc like in the photo. I had to use my knowledge in Python and documentation to do my part of the job, the result ? Something I can be proud of.</p>
						<p>It clearly make me realise how complex a work can be when it involve several features.</p>
					</div>
					<img
						src="../hackathon2024.jpg"
						alt="hackathon"
						className="displayImage"
						height="500px"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "March 8, 2024 - March 9, 2024",
		title: "Cyber security challenge 2024",
		description:
			"In Belgium, just like in the rest of the world, cyber security has become a strategic priority for organizations across all sectors. In this context, training and hiring young potential in the area of information security has become even more crucial than in the past.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.displayImage {
					max-width: 100%;
					height: auto;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					transition: transform 0.2, box-shadow 0.2s;	
				}
				
				.styled-image-hover {
					transform: scale(1.05);
					box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
				}
				
				.paragraph {
					margin: 16px;
					font-size: 16px;
				}
				`,
		keywords: [
			"Cyber security challenge Ephec",
			"Ciamala Kombe security challenge",
			"Alpharad Cyber security challenge",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<DisplayCard hour="10" date="March 8, 2024 - March 9, 2024" expert="NVISO" website="https://www.cybersecuritychallenge.be/" />
					<div>
						<p>I participated with friend to the cyber security challenge in 2024, a nice experience, I wasn't that focused on getting an high score, mostly doing challenges that interested me, but I was surprised by the difficulty of each challenges.</p>
						<p>Yes, I know, this isn't quite the high score, I'm not specially good in cyber security. Me and my group were already struggling on low points challenges. But again, my purpose wasn't to be qualified, but discovering and learn from challenges I make.</p>
						<p>It was a great way to be introduce to security in the IT world, especially now after I've finally had my cyber security class at Ephec.</p>
					</div>
					<img
						src="../ChallengeMembers.png"
						alt="hackathon"
						className="displayImage"
						height="200px"
					/>
					<img
						src="../ChallengeParticipants.png"
						alt="hackathon"
						className="displayImage"
						height="200px"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "February, 2023 - December, 2024",
		title: "Colryut",
		description:
			"I got the chance to experience my first professional experience by being accepted at kasteelbrakel's Colryut.",
		keywords: [
			"Colryut student job",
			"Ciamala Kombe Colryut",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.displayImage {
					max-width: 100%;
					height: auto;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					transition: transform 0.2, box-shadow 0.2s;	
				}
				
				.styled-image-hover {
					transform: scale(1.05);
					box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
				}
				
				.paragraph {
					margin: 16px;
					font-size: 16px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<DisplayCard hour="10" date="February, 2023 - December, 2024" expert="Mieke Beyen" website="https://www.colruyt.be/fr/recherche-de-magasin/colruyt-braine-le-chateau" />
					<div className="paragraph">
						<p>At the beginning of 2023, I finally had my first experience as a worker. It was a pretty physical work, coordinating with others, deadlines, helping people, remembering fruits and vegetables numbers, etc.</p>
						<p>By the end of it, I got used to the work, even when the schedule was... pretty damn hard, sometimes I had to get up at 4.AM to start at 6.AM, then work until 13.AM, the only surprising thing is the fact I've been able to stay awake after that.</p>
						<p>Colryut helped me develop a better sense of partnership and teamwork, but also consistency, clearly an experience I won't forget as it was my very first professional job.</p>
					</div>
					<img
						src="../Colryut proof.jpg"
						alt="hackathon"
						className="displayImage"
						height="500px"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "October 07, 2024 - November 25, 2024",
		title: "LaTex lab",
		description:
			"A lab at Ephec was organised to learn to use LaTex which is a editor to create complex and formatted documents with ease.",
		keywords: [
			"LaTex lab Ephec",
			"Ciamala Kombe LaTex",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.displayImage {
					max-width: 100%;
					height: auto;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					transition: transform 0.2, box-shadow 0.2s;	
				}
				
				.styled-image-hover {
					transform: scale(1.05);
					box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
				}
				
				.paragraph {
					margin: 16px;
					font-size: 16px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<DisplayCard hour="6" date="October 07, 2024 - November 25, 2024" expert="G. STEPHANIE" website="https://fr.overleaf.com/" />
					<div className="paragraph">
						<p>During the first semester of our last year, an lab was organise to learn how to use LaTex, it was a surprise for me and a question I had since a while. It was interesting to see how professors were actually making their course.</p>
						<p>It's again, a pretty useful tool to had to my skills. It will be useful to write report and professional summary or anything in this type.</p>
						<p>This was a chance to learn how to make beautiful content like table, electronic schema, etc.</p>
					</div>
					<img
						src="../LaTexParticipation.png"
						alt="hackathon"
						className="displayImage"
						height="500px"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "October 30, 2024 - October 31, 2024",
		title: "Emergency training",
		description:
			"There was a formation to initiate people to emergency procedure in case of an accident.",
		keywords: [
			"Ciamala Kombe Emergency training",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.displayImage {
					max-width: 100%;
					height: auto;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					transition: transform 0.2, box-shadow 0.2s;	
				}
				
				.styled-image-hover {
					transform: scale(1.05);
					box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
				}
				
				.paragraph {
					margin: 16px;
					font-size: 16px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<DisplayCard hour="0" date="October 30, 2024 - October 31, 2024" expert="European Red Cross" website="https://formations.croix-rouge.be/formations-particuliers/brevet-europeen-de-premiers-secours-beps.html" />
					<div className="paragraph">
						<p>It happen at La Hulpe, near the center in the emergency training center. It was a pretty interesting and weird experience, since we saw things that could shock some people.</p>
						<p>It lasted 12 hours, 6 hours a day with a pause between, while it was a lot of talk, it also showed us a lot of ways to deal with potential accident.</p>
						<p>That formation taught me to be more careful in some situation I might not have been before, it also was good information since I had to go skiing in December.</p>
					</div>
					<img
						src="../EmergencyTraining.png"
						alt="hackathon"
						className="displayImage"
						height="500px"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_6() {
	return {
		date: "October 1, 2024",
		title: "Microsoft tools & Cloud",
		description:
			"The company Axentys came to the school in order to make a conference on tools related to Microsoft as well as presenting their trainee's opportunity.",
		keywords: [
			"Axentys conference Ephec",
			"Ciamala Kombe Axentys",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.displayImage {
					max-width: 100%;
					height: auto;
					border-radius: 8px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					transition: transform 0.2, box-shadow 0.2s;	
				}
				
				.styled-image-hover {
					transform: scale(1.05);
					box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
				}
				
				.paragraph {
					margin: 16px;
					font-size: 16px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<DisplayCard hour="2" date="October 1, 2024" expert="Axentys" website="https://www.axentys.be/fr_BE" />
					<div className="paragraph">
						<p>During our first semester, Axentys Belgium came to the school to make a conference, they introduced us to their company, their objectives and also their tools, which are from Microsoft</p>
						<p>It was a nice discovering about Microsoft Azure and others tools provided by this giant. This was also a good introduction to computer clouding, we got a look at how a lot of company manage their infrastructure</p>
					</div>
					<img
						src="../AxentysConference.png"
						alt="hackathon"
						className="displayImage"
						height="500px"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4, article_5, article_6];

export default myArticles;
