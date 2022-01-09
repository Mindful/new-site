import React from "react"
import { graphql } from "gatsby"
import {BlogPost, BoundingBox, Layout} from "../components";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                     location
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    return (
        <Layout lang={'en'} location={location}>
            <BoundingBox>
                <BlogPost post={markdownRemark}/>
            </BoundingBox>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`