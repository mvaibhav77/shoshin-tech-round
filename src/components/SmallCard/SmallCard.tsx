import clsx from "clsx";
import React from "react";

type Props = {
  card: {
    title: string;
    subtitle: string;
    total: number;
    color: string;
    urgent: number;
    textColor: string;
  };
};

const SmallCard = ({ card }: Props) => {
  return (
    <div
      className={`card flex flex-col gap-2 p-4 rounded-md flex-1`}
      style={{ backgroundColor: card.color }}
    >
      <h3 className="text-lg font-semibold">{card.title}</h3>
      <h1 className="text-4xl font-semibold">{card.total}</h1>
      <h4 style={{ color: card.textColor }}>
        {card.urgent} {card.subtitle}
      </h4>
    </div>
  );
};

export default SmallCard;
