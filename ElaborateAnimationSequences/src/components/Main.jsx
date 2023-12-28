export default function Main() {
  return (
    <main>
      <a
        href="#"
        className="logo inline-block translate-y-24 text-2xl font-bold uppercase tracking-wider text-purple-600 opacity-0 hover:text-purple-600/80"
      >
        Skillton
      </a>
      <div className="mt-20 flex flex-col items-end gap-16 md:flex-row ">
        <h1 className="mx-auto max-w-md translate-y-24 text-center text-4xl font-bold leading-relaxed opacity-0 md:m-0 md:max-w-xs md:text-left md:leading-normal">
          A Teaching Platform with Flexibility, Finally.
        </h1>
        <div className="form flex w-full translate-y-24 flex-col justify-center opacity-0">
          <h3 className="font-bold">Notify me when it releases:</h3>
          <form action="" className="flex  gap-2">
            <input
              type="text"
              placeholder="Email Address"
              className="flex-1 rounded-md border p-4 text-black outline-none focus:border-black"
            />
            <button
              type="submit"
              className="rounded-md bg-purple-600 px-8 py-4 hover:bg-purple-600/60"
            >
              Add me
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
