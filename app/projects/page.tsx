import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN 
	? Redis.fromEnv() 
	: null;

export const revalidate = 60;
export default async function ProjectsPage() {
	let views: Record<string, number> = {};
	
	if (redis) {
		try {
			views = (
				await redis.mget<number[]>(
					...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
				)
			).reduce((acc, v, i) => {
				acc[allProjects[i].slug] = v ?? 0;
				return acc;
			}, {} as Record<string, number>);
		} catch (error) {
			console.warn("Redis connection failed, using default view counts");
			views = allProjects.reduce((acc, p) => {
				acc[p.slug] = 0;
				return acc;
			}, {} as Record<string, number>);
		}
	} else {
		// Development mode without Redis
		views = allProjects.reduce((acc, p) => {
			acc[p.slug] = 0;
			return acc;
		}, {} as Record<string, number>);
	}

	const featured = allProjects.find((project) => project.slug === "aicockpit");
	const top2 = allProjects.find((project) => project.slug === "aiva");
	const top3 = allProjects.find((project) => project.slug === "assistiq");
	
	// Fallback to other projects if featured ones aren't found
	const publishedProjects = allProjects.filter((p) => p.published);
	const featuredProject = featured || publishedProjects[0];
	const top2Project = top2 || publishedProjects[1];
	const top3Project = top3 || publishedProjects[2];
	
	const sorted = publishedProjects
		.filter(
			(project) =>
				project.slug !== featuredProject?.slug &&
				project.slug !== top2Project?.slug &&
				project.slug !== top3Project?.slug,
		)
		.sort(
			(a, b) =>
				new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);

	if (!featuredProject) {
		return (
			<div className="relative pb-16">
				<Navigation />
				<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
					<div className="max-w-2xl mx-auto lg:mx-0">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
							Projects
						</h2>
						<p className="mt-4 text-zinc-400">
							Loading projects...
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href={`/projects/${featuredProject.slug}`} className="cursor-target">
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										{featuredProject.date ? (
											<time dateTime={new Date(featuredProject.date).toISOString()}>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featuredProject.date))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
									<span className="flex items-center gap-1 text-xs text-zinc-500">
										<Eye className="w-4 h-4" />{" "}
										{Intl.NumberFormat("en-US", { notation: "compact" }).format(
											views[featuredProject.slug] ?? 0,
										)}
									</span>
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									{featuredProject.title}
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featuredProject.description}
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
						{[top2Project, top3Project].filter(Boolean).map((project) => (
							<Card key={project!.slug}>
								<Article project={project!} views={views[project!.slug] ?? 0} />
							</Card>
						))}
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} views={views[project.slug] ?? 0} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
