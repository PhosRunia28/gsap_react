import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { useRef } from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const container = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power4.inOut" },
      });
      tl.to("h1, .logo", { opacity: 1, y: 0, duration: 2.2 });
      tl.to(".form", { opacity: 1, y: 0 }, "-=2");
      tl.to(".card", { scaleY: 1, stagger: 0.1 }, "-=2");
      tl.from(
        ".flagPoles",
        { stagger: 0.2, opacity: 0, transform: "translateY(100px)" },
        "-=2",
      );
      tl.to(
        ".title, .desc",
        { stagger: 0.2, duration: 0.7, opacity: 1, y: 0 },
        "-=2",
      );
      tl.to("footer", { opacity: 1 }, "-=1");
    },
    { scope: container },
  );
  return (
    <div className=" bg-[#2f3542] text-white" ref={container}>
      <div className=" mx-auto px-6 py-8 md:px-10 lg:max-w-6xl">
        <Main />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
