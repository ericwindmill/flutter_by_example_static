const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions

    const tutorialPageTemplate = path.resolve(`./src/templates/blog-post.js`);
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);

    return graphql(
        `
{
  allStrapiTutorial {
    edges {
      node {
        author {
          email
          username
          id
        }
        category
        created_at
        id
        strapiId
        title
        updated_at
        lessons {
          author
          content
          created_at
          id
          slug
          title
          tutorial
          updated_at
        }
        internal {
          type
        }
      }
    }
  }
}

    `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }

        // Create lesson pages
        const tutorials = result.data.allStrapiTutorial.edges;
        tutorials.forEach((tutorial, index) => {
          const lessons = tutorial.node.lessons;
          lessons.forEach((lesson, index) => {
            createPage({
              path: `lesson/${lesson.slug}`,
              component: tutorialPageTemplate,
              context: {
                slug: lesson.slug,
              },
            })
          })
        });


        return null
    })
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions;
    if (node.path.includes('/lesson/')) {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
