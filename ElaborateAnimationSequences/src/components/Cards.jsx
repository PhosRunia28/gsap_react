export default function Cards() {
  const cards = [
    {
      title: "Modular",
      text: "Go beyond teaching with just video. Choose from our library of interactive modules or create your own",
    },
    {
      title: "Modular",
      text: "Go beyond teaching with just video. Choose from our library of interactive modules or create your own",
    },
    {
      title: "Modular",
      text: "Go beyond teaching with just video. Choose from our library of interactive modules or create your own",
    },
    {
      title: "Modular",
      text: "Go beyond teaching with just video. Choose from our library of interactive modules or create your own",
    },
  ];
  return (
    <section>
      <div className="mt-24 flex flex-wrap justify-center  gap-8 md:flex-row lg:mt-32 lg:flex-nowrap lg:justify-between">
        {cards.map((card, index) => {
          return (
            <div
              className="card relative scale-y-0 border-l border-gray-500 pb-12 md:pb-16"
              key={index}
            >
              <h3 className="title mt-4 translate-y-10 pl-4 text-lg font-bold opacity-0">
                {card.title}
              </h3>
              <p className="desc mt-2 max-w-[16rem] translate-y-10 pl-4 text-gray-300 opacity-0">
                {card.text}
              </p>
              <div className="flagPoles absolute -left-2 -top-2 h-4 w-4 rounded-full bg-purple-600"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
