import Image from "next/image";
import { Navbar } from "./components";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <span className="text-5xl">Hola Mundo</span>
            </main>
        </>
    );
}