import React from "react";
import Rate from "./cmcTable/Rate";
import Image from "next/image";

const styles = {
  TrendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
};

const TrendingCardRow = ({ number, icon, symbol, isIncrement, rate, name }) => {
  return (
    <div className={styles.TrendingCardRow}>
      <p className="opacity-40">{number}</p>
      <div className="w-full flex">
        <div className="mx-5">
          {" "}
          {icon && <Image src={icon} alt="icon" width={20} height={20} />}
        </div>
        <p className="font-bold">
          {name}
          <span className="text-gray-400">
            {""} {symbol}
          </span>
        </p>
      </div>
      <Rate isIncrement={isIncrement} rate={rate} />
    </div>
  );
};

export default TrendingCardRow;
