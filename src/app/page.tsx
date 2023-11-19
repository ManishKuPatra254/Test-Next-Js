import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex items-center justify-center mt-10">
        <Link
          className="bg-red-500 p-4  text-center rounded hover:bg-slate-600 transition duration-300 ease-in-out"
          href="/home"
        >
          Click here
        </Link>
      </div>
    </main>
  );
}
