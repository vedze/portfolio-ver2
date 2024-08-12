"use clinet";

import styles from "@/styles/components/accodion.module.css";
import { useState } from "react";
import { SlGraph } from "react-icons/sl";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

interface AccodionProps {
  name: string;
  desc: string;
}

export const Accodion = ({ name, desc }: AccodionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleOpen} className={styles.accodion}>
      <div className={styles.accTitle}>
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
