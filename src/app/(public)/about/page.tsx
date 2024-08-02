import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page - First Steps with Next.js",
    description: "This is the about page",
    keywords: ["about", "more about", "Tailwind CSS"],
};


export default function AboutPage() {


    return (
        <>
            <span className="text-5xl">About Page</span>
            {new Date().toLocaleString()}
        </>);
}