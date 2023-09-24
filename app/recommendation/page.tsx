"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import MUICard from '@mui/material/Card';
import Image from "next/image";
import { CardHeader } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const recommendations = [
	{
		title: "From Adobe",
		name: "Dinesh Bhati",
		description: "",
		link: "#dinesh",
		src: '/dinesh.png',
		role: 'Engineering Manager IV at Adobe',
		relation: "Manager",
		date: 'September 13, 2023',
		company: 'Adobe'
	},
	{
		title: "From Byju's",
		name: "Sri Datta Bandreddi",
		description: "",
		link: "#datta",
		src: '/datta.png',
		role: 'Software Engineer at Byjus',
		relation: "Mentor",
		date: 'May 30, 2023',
		company: "Byju's"
	},
];

const titleStyles = {
	fontSize: '1rem',
	transitionDuration: '1000ms',
	color: 'rgb(228 228 231)',
};

const subheaderStyles = {
	fontSize: '.8rem',
	transitionDuration: '1000ms',
	color: 'rgb(228 228 231)',
};

const darkTheme = createTheme({
	palette: {
	  mode: 'dark', // Enable dark mode
	},
  });  


export default function RecommendationPage() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
					{recommendations.map((recommendation, index) => (
						<Card key={index}>
							<div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{recommendation.title}
									</span>
								</div>
								<ThemeProvider theme={darkTheme}>
								<MUICard className='bg-[#18181b00] border border-[#000000]'>
									<CardHeader
										avatar={
											<Image
												src={recommendation.src}
												alt="Profile"
												width={50} // Set the desired width
												height={50} // Set the desired height
												style={{ borderRadius: '50px' }}
											/>
										}
										titleTypographyProps={titleStyles}
										subheaderTypographyProps={subheaderStyles}
										title={`${recommendation.name}`}
										subheader={recommendation.role}
									/>
								</MUICard>
								</ThemeProvider>

								{/* <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									{recommendation.name} is {recommendation.role}
								</span>
								<span className="text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
									He was my {recommendation.relation} during my time at {recommendation.company}
								</span> */}



								<Link
									target="_blank"
									key={recommendation.name}
									href={recommendation.link}
									className="text-[24px] text-zinc-200 inline-block relative transition-transform hover:translate-x-1"
								>
									View{" "}
									<span
										aria-hidden="true"
										className=""
										// style={{
										// 	transition: "transform 0.3s ease-in-out",
										// 	transform: "translateX(0)"
										// }}
									>
										&rarr;
									</span>
								</Link>


							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
