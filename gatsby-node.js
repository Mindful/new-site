const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")


const langs = ["en", "ja"]


exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // ...

    // Create blog-list pages
    const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)

    langs.forEach(function (lang) {
        Array.from({ length: numPages }).forEach((_, i) => {
            let prefix = lang === "en" ? "" : '/' + lang
            let url_pref = prefix + "/blog"
            createPage({
                path: i === 0 ? url_pref : `${url_pref}/${i + 1}`,
                component: path.resolve(`./src/blog_template.js`),
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                    lang: lang
                },
            })
        })
        }
    )
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}