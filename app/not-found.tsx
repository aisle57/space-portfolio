import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-full w-full">
      <div className="relative z-10 max-w-xl mx-auto px-6 pt-40 pb-20 text-center">
        <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-amber-400 mb-4">
          404
        </h1>
        <p className="text-gray-200 text-lg mb-3">
          Page not found
        </p>
        <p className="text-gray-400 mb-10 leading-relaxed">
          That route does not exist on Isotope Economy. Use the links below to
          get back into the hub.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="py-3 px-6 button-primary text-center text-white rounded-lg"
          >
            Home
          </Link>
          <Link
            href="/map"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Supply Map
          </Link>
          <Link
            href="/guide"
            className="py-3 px-6 border border-white/20 text-center text-gray-200 hover:border-sky-400 hover:text-sky-400 transition rounded-lg"
          >
            Guide
          </Link>
        </div>
      </div>
    </main>
  );
}
