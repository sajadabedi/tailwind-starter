export default function Home() {
  return (
    <main className="">
      <header className="border-gray-200 border-b py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="font-semibold">Tiny UI</h1>
        </div>
      </header>
      <div className=" min-h-[50vh] w-full flex-col">
        <h1 className="mb-20 mt-24 text-center text-9xl font-extrabold tracking-tight">
          The <span className="text-primary">portfolio</span>, your dream
          portfolio
        </h1>
        <button className="bg-white border-gray-200 rounded-xl border p-2 shadow-sm">
          Button
        </button>
      </div>
    </main>
  );
}
