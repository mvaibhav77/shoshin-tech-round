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
    <div
      className="card flex flex-col gap-2 px-4 py-6 flex-1 border-[1px] rounded-lg border-slate-300"
      data-testid="big-card"
    >
      <h3 className="font-bold text-lg" data-testid="card-title">
        {card.title}
      </h3>

      <div className="flex gap-2 items-stretch">
        {/* col 1 */}
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <h1 className="text-4xl font-bold" data-testid="card-total">
            {card.total}
          </h1>
          <div className="count flex flex-col gap-1" data-testid="card-count">
            <h4 className="text-sm text-slate-500" data-testid="men-count">
              {card.men} Men
            </h4>
            <h4 className="text-sm text-slate-500" data-testid="women-count">
              {card.women} Women
            </h4>
          </div>
        </div>

        {/* col 2 */}
        <div className="flex-1 flex flex-col gap-2">
          <Image
            src={card.image}
            alt={card.title}
            width={115}
            height={80}
            priority
            data-testid="card-image"
          />
          <h4
            className="bg-[#FFEFE7] w-fit text-center p-1 px-4 text-sm rounded-md"
            data-testid="card-change"
          >
            {card.change}% Past Month
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BigCards;
