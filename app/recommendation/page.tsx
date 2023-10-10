import Link from "next/link";
import React from "react";
import { allRecommendations } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default async function ProjectsPage() {

	const featured = allRecommendations.find((r) => r.slug === "dinesh")!;
	const featured2 = allRecommendations.find((r) => r.slug === "datta")!;
	const sorted = allRecommendations
		.filter(
			(project) =>
				project.slug !== featured.slug &&
				project.slug !== featured2.slug,
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Recommendations
					</h2>
					<p className="mt-4 text-zinc-400">
						Recommendations I've earned :)
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href={`/recommendation/${featured.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									{featured.title}
								</h2>
								<span className="m-4 flex flex-row font-bold text-zinc-100 group-hover:text-white text-[18px] font-display">
									<div className="mr-3">
										<Image src={featured.src}
											alt="Profile"
											width={50} // Set the desired width
											height={50} // Set the desired height
											style={{ borderRadius: '50px' }}
										/></div>
									<div className="flex flex-col">
									<Link href={featured.link}>
										<div className="flex flex-row align-bottom items-center">
											<div className="hover:underline">{featured.name}</div>
												<Linkedin className="mx-2" size={20} />
										</div>
										</Link>
										<div className="font-[300] text-[14px]">{featured.role}</div>
									</div>
									<div>

									</div>

								</span>
								<p className="my-4 mb-8 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featured.short_description}
								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
					<Card>
						<Link href={`/recommendation/${featured2.slug}`}>
							<article className="relative w-full h-full p-4 md:p-8">
								<h2
									id="featured2-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									{featured2.title}
								</h2>
								<span className="m-4 flex flex-row font-bold text-zinc-100 group-hover:text-white text-[18px] font-display">
									<div className="mr-3">
										<Image src={featured2.src}
											alt="Profile"
											width={50} // Set the desired width
											height={50} // Set the desired height
											style={{ borderRadius: '50px' }}
										/></div>
									<div className="flex flex-col">
									<Link href={featured2.link}>
										<div className="flex flex-row align-bottom items-center">
											<div className="hover:underline">{featured2.name}</div>
												<Linkedin className="mx-2" size={20} />
										</div>
										</Link>
										<div className="font-[300] text-[14px]">{featured2.role}</div>
									</div>
									<div>

									</div>

								</span>
								<p className="my-4 mb-8 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featured2.short_description}
								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				{/* <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article recommendation={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article recommendation={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article recommendation={project} />
								</Card>
							))}
					</div>
				</div> */}

			</div>
		</div>
	);
}
