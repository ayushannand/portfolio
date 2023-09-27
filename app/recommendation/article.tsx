import type { Recommendation } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	recommendation: Recommendation;
};

export const Article: React.FC<Props> = ({ recommendation }) => {
	return (
		<Link href={`/recommendation/${recommendation.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					
				
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{recommendation.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{recommendation.description}
				</p>
			</article>
		</Link>
	);
};
