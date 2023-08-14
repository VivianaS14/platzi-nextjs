import React from "react";

export default function RottenHeader() {
  return (
    <div>
      <h1 className="aliveHeader">
        Fluff{" "}
        <div className={""}>
          <img
            src={"/images/Dead_Fluff.png"}
            alt="Fluff alive"
            className=""
            width={80}
          />
        </div>{" "}
        Store
      </h1>
    </div>
  );
}
