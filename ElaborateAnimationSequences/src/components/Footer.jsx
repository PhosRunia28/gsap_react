export default function Footer() {
  return (
    <footer className=" mt-10 bg-pink-600 px-6 py-14 opacity-0 lg:px-32">
      <div className="flex flex-col justify-center gap-6 text-center text-black md:flex-row md:items-center md:justify-between md:text-left lg:mx-auto lg:max-w-6xl">
        <h2 className=" text-4xl font-bold">All of this, coming in 2024.</h2>
        <p className=" text-lg font-medium">
          Learn more by following us:
          <a href="#" className="pl-3 uppercase tracking-wider text-purple-200">
            skillform
          </a>
        </p>
      </div>
    </footer>
  );
}
