import Counter from "@/src/components/Counter";
import DynamicHooksCounter from "@/src/components/DynamicHooksCounter";
import HooksCounter from "@/src/components/HooksCounter";

export default function Home() {
    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {/* <Counter /> */}
                <HooksCounter />
                <DynamicHooksCounter incrementValue={5} decrementValue={3} />
            </div>
        </div>
    );
}
