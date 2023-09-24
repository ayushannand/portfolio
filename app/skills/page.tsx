import Link from "next/link";
import React from "react";
import { allSkills } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function SkillsPage() {

	const featured = allSkills.find((skill) => skill.title === "Langchain")!;
	const top2 = allSkills.find((skill) => skill.title === "Figma")!;
	const top3 = allSkills.find((skill) => skill.title === "NextJS")!;
	const sorted = allSkills
		.filter(
			(skill) =>
				skill.title !== featured.title &&
				skill.title !== top2.title &&
				skill.title !== top3.title,
		);

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-10 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-10 md:pt-16 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Skills
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the skills are from work and some are on my own time.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
							<article className="relative w-full h-full p-3 md:p-8">
								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									{featured.title}
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featured.description}
								</p>
							</article>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{[top2, top3].map((skill) => (
							<Card key={skill.slug}>
								<Article skill={skill}  />
							</Card>
						))}
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 0)
							.map((skill) => (
								<Card key={skill.slug}>
									<Article skill={skill}  />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 1)
							.map((skill) => (
								<Card key={skill.slug}>
									<Article skill={skill}  />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{sorted
							.filter((_, i) => i % 3 === 2)
							.map((skill) => (
								<Card key={skill.slug}>
									<Article skill={skill} />
								</Card>
							))}
					</div>
				</div>
			</div>
		</div>
	);
}
