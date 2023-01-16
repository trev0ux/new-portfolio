import NextImage from "../image";
import Link from 'next/link';
import styles from './project-item.module.scss';
import React from 'react';
import { motion } from "framer-motion"

export default function Project(props) {
  return (
    <div className={styles.project}>
      <Link as={`/project/${props.slug}`} href="/project/[id]">
        <div>
          <motion.div className={styles.project__image} whileHover={{
            position: 'relative',
            zIndex: 1,
            background: 'white',
            scale: 1.03,
            transition: {
              duration: .4
            }
          }}>
            <NextImage
              image={props.image}
              height="100%"
              width="100%"
              objectFit="cover"
              sizes="(max-width: 768px) 400px,
              (max-width: 1200px) 50vw,
              33vw"
              alt={props.headline}
            />
          </motion.div>
          <header className={styles.project__header}>
            <h3>{props.headline}</h3>
            <h4>Bellosoft</h4>
          </header>
          <div className={styles.project__roles}>
            <span>A project build using Vue JS, SCSS and ES6</span>
          </div>
          <div className={styles.project__tags}>
            <span>Front-end development</span>
            <span>UI Design</span>
          </div>
        </div>
      </Link>
    </div>
  )
}