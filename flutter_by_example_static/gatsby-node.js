const path = require(`path`);
const {createFilePath, createRemoteFileNode} = require(`gatsby-source-filesystem`);

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const tutorialPageTemplate = path.resolve(`./src/templates/lesson-post.js`);
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
    const tagsPageTemplate = path.resolve('./src/templates/tags-page.js');

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
  allStrapiBlogPost {
    edges {
      node {
        slug
        title
        user {
          twitter
          username
          email
        }
        content
        id
        created_at
      }
    }
  }
   allStrapiTag {
    edges {
      node {
        title
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
            for (let i = 0; i < lessons.length; i++) {
                let lesson = lessons[i];
                let next = i+1 === lessons.length ? null : lessons[i+1];
                let previous = i === 0 ? null : lessons[i-1];

                createPage({
                    path: `lesson/${lesson.slug}`,
                    component: tutorialPageTemplate,
                    context: {
                        slug: lesson.slug,
                        tutorialTitle: tutorial.node.title,
                        previous: previous,
                        next: next,
                    },
                })
            }
        });

        // Create blog post page
        const posts = result.data.allStrapiBlogPost.edges;
        posts.forEach((postEdge, index) => {
           const post = postEdge.node;
           createPage({
               path: `blog/${post.slug}`,
               component: blogPostTemplate,
               context: {
                   slug: post.slug,
               }
           });
        });

        // create tags page
        const tags = result.data.allStrapiTag.edges;
        tags.forEach((tagEdge, index) => {
           const tag = tagEdge.node;
           createPage({
               path: `tag/${tag.title}`,
               component: tagsPageTemplate,
               context: {
                   tag: tag.title,
               }
           });
        });
        return null
    })
}

exports.onCreateNode = ({node, actions, getNode}) => {
    const {createNodeField} = actions;
    if (!node.path) return;

    if (node.path.includes('/lesson/')) {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
    if (node.path.includes('/blog/')) {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
    if (node.path.includes('/tag/')) {
        const value = createFilePath({node, getNode});
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}

// exports.createResolvers = ({actions, cache, createNodeId, createResolvers, store, reporter}) => {
//     const {createNode} = actions;
//     createResolvers({
//         StrapiLessonAuthor: {
//             avatarImage: {
//                 type: `File`,
//                 resolve(source, args, context, info) {
//                     return createRemoteFileNode({
//                         url: `${source.url}`, // for S3 upload. For local: `http://localhost:1337${source.url}`,
//                         store,
//                         cache,
//                         createNode,
//                         createNodeId,
//                         reporter,
//                     })
//                 },
//             },
//         },
//     })
// }
