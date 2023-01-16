import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import styles from "./menu-mobile.module.scss";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const MenuMobile = () => (
  <motion.ul
  className={styles.navMobile}
    variants={variants}>
    {itemIds.map(i => (
      <MenuItem item={i} key={i}>
      </MenuItem>
    ))}
  </motion.ul>
);

const itemIds = ["About me", "Resume", "Contact"];

const itens = ["About me", "Resume", "Contact"]
