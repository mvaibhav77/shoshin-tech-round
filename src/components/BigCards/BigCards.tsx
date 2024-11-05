import Image from "next/image";
import React from "react";

type Props = {
  card: {
    title: string;
    total: number;
    men: number;
    women: number;
    change: number;
    image: string;
  };
};

const BigCards = ({ card }: Props) => {
  return (
    <div className="card flex flex-col gap-2 px-4 py-6 flex-1 border-[1px] rounded-lg border-slate-300">
      <h3 className="font-bold text-lg">{card.title}</h3>

      <div className="flex gap-2 items-stretch">
        {/* col 1 */}
        <div className=" flex-1 flex flex-col gap-2 justify-between">
          <h1 className="text-4xl font-bold">{card.total}</h1>
          <div className="count flex flex-col gap-1">
            <h4 className="text-sm text-slate-400">{card.men} Men</h4>
            <h4 className="text-sm text-slate-400">{card.women} Women</h4>
          </div>
        </div>

        {/* col 2 */}
        <div className=" flex-1 flex flex-col gap-2">
          <Image src={card.image} alt={card.title} width={115} height={80} />
          <h4>{card.change}% Past Month</h4>
        </div>
      </div>
    </div>
  );
};

export default BigCards;
