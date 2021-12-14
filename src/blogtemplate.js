import React from "react"
import { graphql } from "gatsby"
import {Heading, Layout, PostLink, Textbox} from "./components"

export default function blogtemplate({
                       data: {
                           allMarkdownRemark: { edges },
                       },
                        location
                   }) {
    let lang = "en";

    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge =>
            <Textbox className={'flex-col'}>
                <Heading>
                    <PostLink key={edge.node.id} post={edge.node}>
                    {edge.node.frontmatter.title}
                    </PostLink>
                </Heading>
                <span>{edge.node.frontmatter.date}</span>
                <p>
                    {edge.node.excerpt}
                </p>
            </Textbox>
        )

    return <Layout lang={lang} location={location}>
        <div className={'w-full mr-10 pr-14'}>
            {Posts}
        </div>
    </Layout>
}


export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`