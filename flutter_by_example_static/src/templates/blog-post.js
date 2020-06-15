import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import ReactMarkdown from "react-markdown/with-html"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.strapiLesson
    // const { previous, next } = this.props.pageContext // todo

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.title}
          description={post.content}
        />
        <h1>{post.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.updatedAt}
        </p>
        <ReactMarkdown source={post.content} escapeHtml={false} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    strapiLesson(slug: { eq: $slug } ) {
    id
    author {
      email
      username
    }
    content
    updated_at(formatString: "dddd, Do of MMMM, YYYY")
    slug
    strapiId
    title
    tutorial {
      category
      title
    }
  }
}
`
