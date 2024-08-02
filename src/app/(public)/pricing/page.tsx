import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Page - First Steps with Next.js",
    description: "This is the pricing page",
    keywords: ["pricing", "more pricing", "Tailwind CSS"],
};

export default function PricingPage() {

    return (
        <>
            
                <span className="text-5xl">Pricing Page</span>
                <br />
                { new Date().toLocaleString() }
        </>);
}