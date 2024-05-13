import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function App() {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  useGSAP(() => {
    gsap.from(".clip-top, .clip-bottom", {
      duration: 1,
      height: "50vh",
      delay: 0.8,
    });
    gsap.to(".marquee", {
      duration: 1,
      top: 0,
      delay: 1.4,
    });
    gsap.from(".clip-top .marquee, .clip-bottom .marquee", {
      left: -300,
      delay: 1.7,
      duration: 1,
    });
    gsap.from(".clip-center .marquee", {
      left: 200,
      delay: 1.7,
      duration: 1.3,
    });
    gsap.to(".clip-top", {
      clipPath: "inset(0% 0% 100% 0%)",
      delay: 3.2,
      duration: 0.6,
    });
    gsap.to(".clip-bottom", {
      clipPath: "inset(100% 0% 0% 0%)",
      delay: 3.2,
      duration: 0.6,
    });
    gsap.to(".clip-center .marquee span", {
      opacity: 0,
      delay: 3.3,
      duration: 0.6,
    });
  }, [container]);
  return (
    <div ref={container}>
      <section className="font-playFair relative h-screen w-full">
        <div className="clip-top absolute top-0 h-[33.3vh] w-full overflow-hidden bg-black text-[7vw] uppercase text-white">
          <div className="marquee absolute top-[200%] flex h-full items-center justify-center gap-2 md:gap-6">
            <span>Rove</span>
            <span>Rove</span>
            Rove
            <span>Rove</span>
            <span>Rove</span>
          </div>
        </div>
        <div className="clip-center relative top-[33.3vh] h-[33.3vh] w-full overflow-hidden text-[7vw] uppercase">
          <div className="marquee absolute top-[200%] flex h-full items-center justify-center gap-2 md:gap-6">
            <span>Rove</span>
            <span>Rove</span>
            Rove
            <span>Rove</span>
            <span>Rove</span>
          </div>
        </div>
        <div className="clip-bottom absolute bottom-0 h-[33.3vh] w-full overflow-hidden bg-black text-[7vw] uppercase text-white">
          <div className="marquee absolute top-[200%] flex h-full items-center justify-center gap-2 md:gap-6">
            <span>Rove</span>
            <span>Rove</span>
            Rove
            <span>Rove</span>
            <span>Rove</span>
          </div>
        </div>
      </section>
      <main className="main font-ubuntu absolute left-0 top-0 z-10 flex h-screen w-full flex-col px-6 py-5">
        <header className="flex items-center justify-between">
          <h2 className="text-md uppercase tracking-wider sm:text-xl">Brand</h2>
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm uppercase transition hover:text-gray-500 sm:text-base"
            >
              Design
            </a>
            <a
              href="#"
              className="text-sm uppercase transition hover:text-gray-500 sm:text-base"
            >
              Design
            </a>
            <a
              href="#"
              className="text-sm uppercase transition hover:text-gray-500 sm:text-base"
            >
              Design
            </a>
          </nav>
        </header>
        <footer className="mt-auto flex items-center justify-between text-center text-sm md:text-base">
          <p className="">Play Film</p>
          <p className="">
            High Quality video production <br /> Made in iceland.
          </p>
          <p className="">Rove 2024</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
