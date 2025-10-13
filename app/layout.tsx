import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import TargetCursor from "./components/target-cursor";
import ClickSpark from "./components/click-spark";

export const metadata: Metadata = {
	title: {
		default: "ayushannand",
		template: "%s | ayushannand",
	},
	description: "Software Engineer at Adobe building AI-powered systems. Published researcher at IWSLT/ACL 2024. Creator of AI Cockpit - sales enablement platform.",
	openGraph: {
		title: "ayushannand",
		description:
			"Software Engineer at Adobe building AI-powered systems. Published researcher at IWSLT/ACL 2024.",
		url: "https://linkedin.com/in/ayushannand",
		siteName: "ayushannand",
		images: [
			{
				url: "https://avatars.githubusercontent.com/u/75881709?v=4",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "ayushannand",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<head>
				<Analytics />
			</head>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				<TargetCursor />
				<ClickSpark 
					sparkColor="#ffffff" 
					sparkSize={12} 
					sparkRadius={20} 
					sparkCount={8} 
					duration={500}
					extraScale={1.2}
				>
					{children}
				</ClickSpark>
			</body>
		</html>
	);
}
