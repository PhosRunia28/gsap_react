import cn from "classnames";
type TextProps = {
  position?: "start" | "center" | "end";
};
export default function Text({ position = "start" }: TextProps) {
  return (
    <div
      className={cn(`relative flex w-full overflow-hidden`, {
        "justify-start": position == "start",
        "justify-center": position == "center",
        "justify-end": position == "end",
      })}
    >
      <h2 className="text text-[5.9rem] uppercase leading-tight">
        <span>"</span>C<span>o</span>de<span>r</span>",
      </h2>
    </div>
  );
}
