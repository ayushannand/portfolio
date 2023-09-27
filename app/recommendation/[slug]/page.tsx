import { notFound } from "next/navigation";
import { allRecommendations } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";

export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};


export async function generateStaticParams(): Promise<Props["params"][]> {
	return allRecommendations
	.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	const r = allRecommendations.find((r) => r.slug === slug);

	if (!r) {
		notFound();
	}


	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header recommendation={r}  />

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Mdx code={r.body.code} />
			</article>
		</div>
	);
}
