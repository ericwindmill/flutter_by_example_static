import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PostItemContainer from "../components/blog_page/post_item_container";
import { graphql, StaticQuery } from "gatsby";
import { MainContentWrapper } from "../styles/styled_components/layout";

class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title={"Flutter by example contributors"}
          description={
            "A list of the folks who contribute to flutter by example"
          }
        />
        <MainContentWrapper>
          <div style={{ margin: "50px 0" }}>
            <h1 style={{ fontSize: 45, margin: 0, padding: 0 }}>
              Community Articles
            </h1>
          </div>
          <StaticQuery
            query={BlogIndexQuery}
            render={data => {
              const posts = data.allStrapiBlogPost.edges;
              return (
                <ul style={{ listStyle: "none" }}>
                  {posts.map((post, index) => (
                    <li style={{ margin: "0 0 30px" }}>
                      <PostItemContainer
                        key={post.node.id}
                        authorName={post.node.user.username}
                        title={post.node.title}
                        date={post.node.created_at}
                        slug={post.node.slug}
                      />
                    </li>
                  ))}
                </ul>
              );
            }}
          />
        </MainContentWrapper>
      </Layout>
    );
  }
}

export default BlogIndexPage;

const BlogIndexQuery = graphql`
  query BlogIndex {
    allStrapiBlogPost(sort: { fields: created_at }) {
      edges {
        node {
          id
          slug
          title
          user {
            username
            twitter
          }
          created_at(formatString: "dddd, Do of MMMM, YYYY")
        }
      }
      totalCount
    }
  }
`;
