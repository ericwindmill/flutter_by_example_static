import React from "react"
import { graphql} from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {rhythm} from "../utils/typography"
import ReactMarkdown from "react-markdown/with-html"
import {MainContentWrapper} from "../styles/styled_components/layout";
import {BlogPostStyleWrapper} from "../styles/styled_components/blog_post_styles";
import MarkdownSyntaxHighlighter from "../styles/markdown-syntax-highlighter";

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.strapiLesson;
        // const { previous, next } = this.props.pageContext // todo

        return (
            <Layout location={this.props.location}>
                <SEO
                    title={post.title}
                    description={post.content}
                />
                <MainContentWrapper>
                    <div style={{margin: '50px 0'}}>
                    <h1 style={{fontSize: 45, margin: 0, padding: 0}}>{post.title}</h1>
                    <p
                        style={{
                            display: `block`,
                            marginBottom: rhythm(1),
                            marginLeft: 0,
                            padding: 0,
                        }}
                    >
                        on {post.updated_at}
                    </p>
                    </div>
                    <BlogPostStyleWrapper>
                        <ReactMarkdown source={post.content} escapeHtml={false} renderers={{code: MarkdownSyntaxHighlighter}}/>
                    </BlogPostStyleWrapper>
                    <hr
                        style={{
                            marginBottom: rhythm(1),
                        }}
                    />
                </MainContentWrapper>
            </Layout>
        )
    }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query LessonPostBySlug($slug: String!) {
    strapiLesson(slug: { eq: $slug } ) {
    id
    author {
      email
      username
      twitter
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
