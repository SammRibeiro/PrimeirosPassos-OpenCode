import styles from'./Section.module.css'
export default function Section({id,eyebrow,title,intro,children,className=''}){return <section id={id} className={`${styles.section} ${className}`}><div className={styles.inner}>{(eyebrow||title)&&<header className={styles.header}>{eyebrow&&<span>{eyebrow}</span>}{title&&<h2>{title}</h2>}{intro&&<p>{intro}</p>}</header>}{children}</div></section>}
