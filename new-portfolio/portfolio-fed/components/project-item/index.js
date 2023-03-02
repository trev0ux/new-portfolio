import NextImage from "../image";
import Link from 'next/link';
import styles from './project-item.module.scss';
import React, { useEffect, useState } from 'react';
import Tilt from "react-parallax-tilt";
import ReactMarkdown from 'react-markdown';

export default function Project(props) {
  const [externalLink, setExternalLink] = useState({as: "", href: ""})
  let setHref;

  useEffect(() => {
    isExternalLink(); 
  }, [])

  function isExternalLink() {
    if (props.externalLink === null || props.externalLink === undefined) {    
      setExternalLink({as: `/project/${props.slug}`, href: "/project/[id]"});
      setHref = false;
    } else {
      setExternalLink({as: props.externalLink, href: props.externalLink})
      setHref = true;
    }
  }

  return (
    <div className={styles.project}>
      <Link as={externalLink.as} href={externalLink.href} passHref={setHref}>
        <div>
          <Tilt className={styles.project__perspective} glareEnable={true} tiltMaxAngleX={10}
            tiltMaxAngleY={10} perspective={1000}
            glareColor={"rgb(255,255,255)"}>
            <div className={styles.project__image}>
              <NextImage
                image={props.image}
                height="100%"
                width="100%"
                alt={props.alt}
                objectFit="cover"
                sizes="(max-width: 768px) 400px,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
          </Tilt>
          <header className={styles.project__header}>
            <h3>{props.headline}</h3>
            <h4>{props.company}</h4>
          </header>
          <div className={styles.project__description}>
            <span>{props.shortDescription}</span>
          </div>
          <div className={styles.project__tags}>
            <ReactMarkdown>
                {props.tags}                  
            </ReactMarkdown>
          </div>
        </div>
      </Link>
    </div>
  )
}