import { Navbar } from "../components";

export default function PublicLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <span className="text-1xl">Hola Mundo</span>
                {children}
            </main></>
    );
}