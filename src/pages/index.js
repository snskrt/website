import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import styles from "../components/index.module.css"

export default () => <div className={styles.container}>
    <Helmet>
        <title>Sanskrit</title>
    </Helmet>

    <p>
        <span role="img" aria-label="Hi">✌️</span> This website is about the Sanskrit language.
    </p>
    <p>
        <span role="img" aria-label="Book">📖</span> Use our <Link to="/dict">dictionary app</Link> and translate words like a pro.
    </p>
    <p>
        <span role="img" aria-label="Books">📚</span> Read some <Link to="/verses">verses</Link> translated by us.
    </p>
</div>
