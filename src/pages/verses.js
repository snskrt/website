import React from "react"
import styles from "../components/verses.module.css"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({data}) => <Layout>
    <Helmet>
        <title>Sanskrit | Verses</title>
    </Helmet>
    
    <h1>Verses</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (

        <div key={node.id} className={styles.verse_link}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <br/>{node.frontmatter.topic}
        </div>
    ))}
</Layout>

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            topic
          }
          fields {
              slug 
          }
        }
      }
    }
  }
`
