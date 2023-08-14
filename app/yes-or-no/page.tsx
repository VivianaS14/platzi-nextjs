"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./page.css";

export default function page() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<"yes" | "no">();
  const [trigger, setTrigger] = useState(0);

  const onTrigger = () => setTrigger(trigger + 1);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const answer = Math.round(Math.random()) ? "yes" : "no";
      setResult(answer);
      setLoading(false);
    }, 1500);
  }, [trigger]);

  return (
    <div className="yesOrNoContainer">
      <h1 className={loading ? "yesOrNoText loading" : "yesOrNoText"}>
        {result}
      </h1>
      <div className="buttonsContainer">
        <button
          className={loading ? "triggerBtn loadingBtn" : "triggerBtn"}
          onClick={onTrigger}
        >
          {loading ? "..." : "Volver a intentar"}
        </button>
        <Link href="/" className="btn">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
