import React from "react"
import styles from "../components/verses.module.css"
import Layout from "../components/layout.js"
import { Helmet } from "react-helmet"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Helmet>
                <title>Sanskrit | {post.frontmatter.title}</title>
            </Helmet>
        
            <div className={styles.verse}>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(
            fields: { slug: { eq: $slug } }
        )
        {  
          html      
          frontmatter { title }    
        }  
    }
`
