import { Card } from "@/components/Card";
import { Introduction } from "@/components/Introduction";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-16 px-24">
            <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm lg:flex">
                <Introduction />

                <div>
                    {/* <Card/> */}
                        <h1>Skills</h1>
                </div>
            </div>
        </main>
    )
}
