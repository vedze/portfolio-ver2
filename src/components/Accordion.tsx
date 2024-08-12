"use client";

import styles from "@/styles/components/accordion.module.css";
import { useState } from "react";
import { SlGraph } from "react-icons/sl";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

interface AccordionProps {
  name: string;
  desc: string;
}

export const Accordion = ({ name, desc }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div onClick={handleOpen} className={styles.accTitle}>
        <span>
          <SlGraph />
          {name}
        </span>
        {isOpen ? <IoIosArrowBack /> : <IoIosArrowDown />}
      </div>
      {isOpen && <div className={styles.accDesc}>{desc}</div>}
    </div>
  );
};
