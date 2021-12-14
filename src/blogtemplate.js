import React from "react"
import { graphql } from "gatsby"
import {Heading, Layout, PostLink, BoundingBox, TextBox} from "./components"

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
            <TextBox className={'flex-col mb-12'}>
                <Heading>
                    <PostLink key={edge.node.id} post={edge.node}>
                    {edge.node.frontmatter.title}
                    </PostLink>
                </Heading>
                <span className={'mb-4'}>{edge.node.frontmatter.date}</span>
                <div className={'blogpost'}
                    dangerouslySetInnerHTML={{ __html: edge.node.html }}
                />
            </TextBox>
        )

    return <Layout lang={lang} location={location}>
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
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`