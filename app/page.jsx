import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full homepage">
      <div className="w-4/5 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="my-8 text-5xl text-white">Explore food from around the world</h1>
        <Link className='py-5 rounded-lg shadow-xl-slate-700 cursor-pointer hover:bg-cyan-700 hover:px-3 text-white text-2xl'
          href="/types">List of cuisines</Link>
      </div>
    </div>
  );
}
