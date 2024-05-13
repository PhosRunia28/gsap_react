import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";
import SmoothScroll from "./components/SmoothScroll";
import Wrapper from "./components/Wrapper";
function App() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    const splitType = document.querySelectorAll(".reveal-type");
    splitType.forEach((char) => {
      const text = new SplitType(char as HTMLElement, { types: "chars" });
      gsap.fromTo(
        text.chars,
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.03,
          stagger: 0.02,
          scrollTrigger: {
            trigger: char,
            scrub: true,
            start: "clamp(top 80%)",
            end: "clamp(top 20%)",
          },
        },
      );
    });
  }, [container]);

  return (
    <SmoothScroll>
      <main ref={container}>
        <Wrapper>
          <h2 className="text-center text-2xl">Scroll Down to awesome</h2>
        </Wrapper>
        <Wrapper className="border-2">
          <p className="reveal-type text-4xl leading-tight">
            Systematically ushering in a new generation of amazing designers
            from across the globe.
          </p>
        </Wrapper>
        <Wrapper className="bg-yellow-500 ">
          <p className="reveal-type text-4xl leading-tight">
            Modern UI designers will expand their skillsets to include frontend.
          </p>
        </Wrapper>
        <Wrapper className="bg-black text-white">
          <p className="reveal-type text-4xl leading-tight">
            The web isn't static anymore, interactivity and motion now dominate.
          </p>
        </Wrapper>
      </main>
    </SmoothScroll>
  );
}

export default App;
