"use client";
import { ArrowLeft, Eye, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
	recommendation: {
		title: string;
		name?: string;
		link: string;
		src: string;
		role?: string;
		relation?: string;
		date?: string;
		company?: string;
		description?: string;
		short_description?: string;
	};
};
export const Header: React.FC<Props> = ({ recommendation }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);


	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header
			ref={ref}
			className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black w-[100vw] h-[100vh]"
		>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-white/10  border-zinc-200 lg:border-transparent"
					}`}
			>

				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">

						<Link target="_blank" href="https://linkedin.com/in/ayushannand">
							<Linkedin
								className={`w-6 h-6 duration-200 hover:font-medium ${isIntersecting
										? " text-zinc-400 hover:text-zinc-100"
										: "text-zinc-600 hover:text-zinc-900"
									} `}
							/>
						</Link>
						<Link target="_blank" href="https://github.com/ayushannand">
							<Github
								className={`w-6 h-6 duration-200 hover:font-medium ${isIntersecting
										? " text-zinc-400 hover:text-zinc-100"
										: "text-zinc-600 hover:text-zinc-900"
									} `}
							/>
						</Link>
					</div>

					<Link
						href="/recommendation"
						className={`duration-200 hover:font-medium ${isIntersecting
								? " text-zinc-400 hover:text-zinc-100"
								: "text-zinc-600 hover:text-zinc-900"
							} `}
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>

			//Content
			<div className="py-10 px-6 sm:px-12 lg:px-24 text-white">
				<div className="max-w-screen-xl mx-auto">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-display">
							{recommendation.title}
						</h1>
					</div>

					<div className="mt-10 flex items-center justify-center space-x-4">
						<div className="w-20 h-20 relative overflow-hidden rounded-full m-4 flex flex-row font-bold text-zinc-100 group-hover:text-white text-[24px] font-display">
							<Image
								src={recommendation.src}
								alt="Profile"
								layout="fill"
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<div className="text-left">
							<p className="font-bold text-[28px] text-gray-300">{recommendation.name}</p>
							<p className="text-[24px] text-gray-300">{recommendation.role}</p>
						</div>
					</div>

					<p className="mt-8 text-lg leading-8 text-gray-300">
						{recommendation.description}
					</p>

					<Link href={recommendation.link} target="_blank">
						<div className="w-full justify-center flex p-4 text-xl font-bold cursor-pointer">
							<p className="text-zinc-200 hover:text-zinc-50  flex flex-row items-center">
								<p>View {recommendation.name}'s LinkedIn Profile</p> <Linkedin className="mx-2" size={20} /> <span aria-hidden="true">&rarr;</span>
							</p>
						</div>
					</Link>

				</div>
			</div>
		</header>
	);
};
