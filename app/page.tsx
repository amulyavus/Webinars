import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="text-center">
        <Image
          src="https://babynama.com/_next/static/media/logo-light.f8d530c6.svg"
          alt="Babynama Logo"
          width={150}
          height={35}
          priority
          className="mx-auto mb-8"
        />
        <Link href="/webinars">
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            View Webinars
          </button>
        </Link>
      </div>
    </main>
  );
}
