const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")


const langs = ["en", "ja"]


exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        createNodeField({
            name: `slug`,
            node,
            value: node.frontmatter.slug,
        })
    }
}

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
              id
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
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }, index) => {
        createPage({
            path: '/ja' + node.fields.slug,
            component: path.resolve(`./src/pages/{MarkdownRemark.frontmatter__slug}.js`),
            context: { id: node.id, lang: 'ja' },
        })
    })

    // Create blog-list pages
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
