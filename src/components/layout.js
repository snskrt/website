import React from "react"
import { Link } from "gatsby"
import styles from "../components/layout.module.css"

export default ({ children }) => (
  <div className={styles.container}>
    <nav className={styles.menu}>
        <Link to="/verses">Verses</Link>
        <Link to="/dict">Sanskrit-English Dictionary</Link>
    </nav>
    {children}
    <footer>
        &copy; <a href="https://twitter.com/dankocherga" target="_blank" rel="noopener noreferrer">Daniel Kocherga</a>
    </footer>
  </div>
)
