import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Text from "../components/Text";
export default function TextReveal() {
  const container = useRef();
  useGSAP(() => {
    const textAnimation = gsap.timeline();
    textAnimation.fromTo(
      ".text",
      {
        y: 100,
        opacity: 0,
      },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, yoyo: true, repeat: -1 },
    );
  }, [container]);
  return (
    <div ref={container} className="flex flex-col py-10 font-inter text-white">
      <Text position="end" />
      <Text />
      <Text position="center" />
      <Text />
    </div>
  );
}
