import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-24">
      <section className="bg-gray-800 p-8 rounded-lg shadow-dark-lg">
        <div className="flex flex-row items-center justify-between w-full max-w-4xl">
          <figure className="flex-1 mr-8">
            <Image src="/panda-bear-welcome.avif" alt="Wildlife" width={500} height={500} />
          </figure>
          <div className="flex-1 flex flex-col items-center justify-center p-16">
            <h1 className="text-6xl font-bold mb-16">Wild Track</h1>
            <hr className="w-full border-gray-600 mb-16" />
            <p className="text-2xl mb-16 text-center">Track wildlife across the US!</p>
            <hr className="w-full border-gray-600 mb-16" />
            <button className="w-full py-2 bg-gray-700 text-white rounded-full hover:bg-gray-500 hover:scale-105 transition-transform duration-300 ease-in-out">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
