import { useRef } from "react";
import MenuDesktop from "../menu-desktop";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../use-dimensions";
import MenuMobile  from "../menu-mobile";
import styles from "./header.module.scss";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 90% 50px)`,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 90% 50px)",
        opacity: 0,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export default function Header({lightHeader, props}) {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    function toggleTheme(e) {
        console.log("test");
        const container = document.querySelector("html");
        if (e.target.checked) {
          container.classList.add("pink-theme");
        } else {
          container.classList.remove("dark-theme");
        }
      }

    return (
            <motion.header
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className={`${styles.header} ${lightHeader && !isOpen ? styles["header--light"] : ""}`}                
                custom={height}
                ref={containerRef}
            >
                <input type="checkbox" onChange={e => toggleTheme(e)}/>
                <motion.nav variants={sidebar}>
                    <MenuMobile resumeLink={props.resumeLink} close={() => toggleOpen()}/>
                </motion.nav>
                <MenuDesktop lightHeader={lightHeader && !isOpen ? true : false} resumeLink={props.resumeLink} toggle={() => toggleOpen()} isOpen={isOpen} />
            </motion.header>
    )
}