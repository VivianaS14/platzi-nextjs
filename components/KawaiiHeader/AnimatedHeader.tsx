"use client";
import { useState } from "react";

interface Props {
  visible: boolean;
  onClick: () => void;
}

const AnimatedHeader = ({ visible, onClick }: Props) => {
  return (
    <div>
      <h1 className="aliveHeader">
        Fluff{" "}
        <div className={visible ? "fluffAnimation" : ""} onClick={onClick}>
          <img
            src={"/images/Fluff.png"}
            alt="Fluff alive"
            className=""
            width={80}
          />
        </div>{" "}
        Store
      </h1>
    </div>
  );
};

export default AnimatedHeader;
