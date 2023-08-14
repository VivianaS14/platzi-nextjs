"use client";

import React, { useEffect, useState } from "react";
import FluffVivo from "./AnimatedHeader";
import FluffMurido from "./RottenHeader";
import ModalHeader from "./ModalHeader";
import "./KawaiiHeader.css";

export default function KawaiiHeader() {
  const [visible, setVisible] = useState(false);
  const [meMori, setMeMori] = useState(false);
  const [count, setCount] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);
  const toggleVisible = () => {
    setCount((prevCount) => prevCount + 1);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  useEffect(() => {
    if (count === 4) {
      setMeMori(true);
      setModalOpen(true);
    }
  }, [count]);

  return (
    <div className="headerContainer">
      {meMori ? (
        <FluffMurido />
      ) : (
        <FluffVivo visible={visible} onClick={toggleVisible} />
      )}

      {modalOpen && <ModalHeader onClick={closeModal} />}
    </div>
  );
}
