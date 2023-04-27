import { motion } from "framer-motion";
import MenuItem from "./menu-item";
import styles from "./menu-mobile.module.scss";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const MenuMobile = ({resumeLink, close}) => {
  const itemIds = [{id: 1, item: "About me", link: "/about-me"}, { id: 2, item: "Resume", link: `${resumeLink}`, passHref: true} , {id: 3, item: "Work", link: "/#work"}, {id: 4, item: "Contact", link: "/#footer"}];

  return (
    <motion.ul
      className={styles.navMobile}
      variants={variants}>
      {itemIds.map(i => (
        <MenuItem item={i.item} link={i.link} key={i.id} passHref={i.passHref} close={close}>
        </MenuItem>
      ))}
    </motion.ul>
  )
};

export default MenuMobile;