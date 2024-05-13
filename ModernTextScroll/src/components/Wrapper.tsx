import { ReactNode } from "react";

export default function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={"pad flex h-screen items-center justify-center " + className}
    >
      {children}
    </section>
  );
}
