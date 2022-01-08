import React from "react"
import { graphql } from "gatsby"
import {Layout, BoundingBox, BlogPost} from "./components"

export default function blog_template({
                       data: {
                           allMarkdownRemark: { edges },
                       },
                        pageContext,
                        location
                   }) {
    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge, index) =>
            <BlogPost className={index === edges.length - 1 ? '' : ' mb-6'} post={edge.node}/>
        )

    return <Layout lang={pageContext.lang} location={location} page_title={"Blog"}>
        <BoundingBox className={'flex-col'}>
            {Posts}
        </BoundingBox>
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
          html
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            slug
            title
          }
        }
      }
    }
  }
`