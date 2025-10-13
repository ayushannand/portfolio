import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
	{ name: "Skills", href: "/skills" },
	{ name: "Recommendation", href: "/recommendation" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="cursor-target text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={1000}
			/>
			<h1 className="cursor-target z-10 text-4xl text-transparent duration-1000 bg-white text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				ayushannand
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
					Hi, I'm <span className="cursor-target">Ayush Anand</span> — a{" "}
					<Link
						target="_blank"
						href="https://www.adobe.com/"
						className="cursor-target underline duration-500 hover:text-zinc-300"
					>
						Software Engineer at Adobe
					</Link>
					{" "}building intelligent, AI-powered systems.
					<br />
					<br />
					I lead development of{" "}
					<span className="cursor-target text-zinc-400 font-semibold">AI Cockpit</span>
					{" "}— an AI sales enablement platform combining real-time coaching, scenario simulations, and decision-support tools.
					<br />
					<br />
					B.Tech in IT from{" "}
					<Link
						target="_blank"
						href="https://nitkkr.ac.in/"
						className="cursor-target underline duration-500 hover:text-zinc-300"
					>
						National Institute of Technology, Kurukshetra
					</Link>
					{" "}• Published researcher at{" "}
					<Link
						target="_blank"
						href="https://aclanthology.org/2024.iwslt-1.37"
						className="cursor-target underline duration-500 hover:text-zinc-300"
					>
						IWSLT/ACL 2024
					</Link>
				</h2>
			</div>
		</div>
	);
}
