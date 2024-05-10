import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
export default function IntroPage() {
  const skillFormContainer = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      default: { ease: "power4.inOut", duration: 2 },
      // repeat: -1,
      // yoyo: true,
    });

    tl.to("#heading, #logo", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      y: 0,
      opacity: 1,
      duration: 1,
    });
    tl.to(
      "#forms",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=.8",
    );
    tl.fromTo(
      "#card",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.5,
      },
      "-=.5",
    );
    tl.fromTo(
      "#card .before",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
      },
      "-=1.2",
    );
    tl.to(
      "#footer",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        y: 0,
        opacity: 1,
      },
      "-=.5",
    );
  }, [skillFormContainer]);
  return (
    <main className="flex flex-col gap-5" ref={skillFormContainer}>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-5 pb-10 pt-5 text-white">
        <header
          className="translate-y-20 uppercase tracking-wide opacity-0"
          id="logo"
        >
          SKIllForm
        </header>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2
            className="w-full max-w-[17rem] translate-y-20 text-4xl leading-snug opacity-0"
            id="heading"
          >
            A Teaching Platform with Flexibility, Finally
          </h2>
          <form
            className="flex flex-1 translate-y-20 flex-col gap-1 opacity-0"
            id="forms"
          >
            <label htmlFor="email" className="text-sm font-medium ">
              Notify me when it release :
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                id="email"
                placeholder="Email Address.."
                name="email"
                className="w-full px-4 py-2 text-black focus:ring-secondary"
              />
              <button
                type="submit"
                className="inline-block w-full max-w-fit rounded bg-secondary px-5 py-2"
              >
                Add me
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:justify-normal">
          <div
            className="relative flex flex-col gap-3 border-l border-gray-200 pb-4 pl-5"
            id="card"
          >
            <div className="before absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-white"></div>
            <h3 className="font-medium">Modular</h3>
            <p className="w-full max-w-[13rem] text-sm text-gray-200/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, earum
              labore rem ut id consectetur ipsa, soluta dolorem dolore
            </p>
          </div>
          <div
            className="relative flex flex-col gap-3 border-l border-gray-200 pb-4 pl-5"
            id="card"
          >
            <div className="before absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-white"></div>
            <h3 className="font-medium">Modular</h3>
            <p className="w-full max-w-[13rem] text-sm text-gray-200/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, earum
              labore rem ut id consectetur ipsa, soluta dolorem dolore
            </p>
          </div>
          <div
            className="relative flex flex-col gap-3 border-l border-gray-200 pb-4 pl-5"
            id="card"
          >
            <div className="before absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-white"></div>
            <h3 className="font-medium">Modular</h3>
            <p className="w-full max-w-[13rem] text-sm text-gray-200/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, earum
              labore rem ut id consectetur ipsa, soluta dolorem dolore
            </p>
          </div>
          <div
            className="relative flex flex-col gap-3 border-l border-gray-200 pb-4 pl-5"
            id="card"
          >
            <div className="before absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-white"></div>
            <h3 className="font-medium">Modular</h3>
            <p className="w-full max-w-[13rem] text-sm text-gray-200/50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, earum
              labore rem ut id consectetur ipsa, soluta dolorem dolore
            </p>
          </div>
        </div>
      </div>
      <div className="-translate-y-20 bg-secondary py-10 opacity-0" id="footer">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-between gap-2 md:flex-row">
          <h3 className="text-xl">All to this, coming in 2024</h3>
          <p className="">
            Learn more by following us:
            <span className="font-bold uppercase text-primary">SKillForm</span>
          </p>
        </div>
      </div>
    </main>
  );
}
