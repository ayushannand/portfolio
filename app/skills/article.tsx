import type { Skill } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	skill: Skill;
};

export const Article: React.FC<Props> = ({ skill }) => {
	return (
			<article className="p-2 md:p-4">
				<div className="flex justify-between gap-2 items-center">

				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{skill.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{skill.description}
				</p>
			</article>
	);
};
