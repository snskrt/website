import React from "react"
import Layout from "../components/layout"
import DictGallery from "../components/dict-gallery"
import styles from "../components/dict.module.css"
import { Helmet } from "react-helmet"

export default ({data}) => <Layout>
    <Helmet>
        <title>Sanskrit | Dictionary</title>
    </Helmet>

    <h1>Sanskrit-English Dictionary App</h1>

    Features:
    <ul>
        <li>Monier Williams dictionary (1899)</li>
        <li>Apte dictionary (1890)</li>
        <li>Input: Harvard-Kyoto, SLP1, ITRANS</li>
        <li>Display: IAST, Devanagari, Harvard-Kyoto, SLP1, ITRANS</li>
        <li>Abbreviations and source authorities hints</li>
    </ul>

    <div className={styles.download}>
        <a href="https://github.com/snskrt/desktop-dict/releases/download/v1.1.0/snskrt.dmg">Download for Mac</a>
        <a href="https://github.com/snskrt/desktop-dict/releases/download/v1.1.0/snskrt.exe">Download for Windows</a>

        <p className={styles.warn}><span role="img" aria-label="Warn">⚠️</span> Your computer may try to block this app since it is not signed.<br/>Allow it through windows smartscreen, or on mac, <nobr>right-click > open</nobr>.</p>
    </div>

    <h2>Screenshots</h2>

    <DictGallery />

    Hosted with &#10084; on <a href="https://github.com/snskrt/desktop-dict" target="_blank" rel="noopener noreferrer">GitHub</a>
    
</Layout>
