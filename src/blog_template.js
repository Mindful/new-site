import React from "react"
import { graphql } from "gatsby"
import {Layout, BoundingBox, BlogPost, LangLink} from "./components"

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
            <BlogPost headerLink={true} lang={pageContext.lang} key={edge.node.id} className={index === edges.length - 1 ? '' : ' mb-6'} post={edge.node}/>
        )

    const page_range = [...Array(pageContext.numPages).keys()]
    const blog_page_links = page_range.map((idx) =>
        <LangLink lang={pageContext.lang} to={idx === 0 ? '/blog' : '/blog/'+ (idx+1) }
                  className={(pageContext.currentPage === idx+1 ? "bg-white " : "") + "inline-flex items-center px-4 py-2 border text-sm font-medium"}>
            {idx+1}
        </LangLink>
    )

    return <Layout lang={pageContext.lang} location={location} page_title={"Blog"}>
        <BoundingBox className={'flex-col'}>
            {Posts}
            <div className="mt-5 mx-auto">
                {pageContext.numPages > 1 &&
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        {blog_page_links}
                    </nav>
                }
            </div>
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