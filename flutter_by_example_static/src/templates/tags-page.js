import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql} from "gatsby";
import {MainContentWrapper} from "../styles/styled_components/layout";
import PostItemContainer from "../components/blog_page/post_item_container";

class Tags extends React.Component {
    render() {
        console.log(this.props.data);
        const tag = this.props.data.strapiTag;
        const postEdges = this.props.data.allStrapiBlogPost.edges;
        const tutorialEdges = this.props.data.allStrapiTutorial.edges;

        return (
            <Layout location={this.props.location}>
                <SEO
                    title={"Flutter by example articles by tag"}
                    description={"A list of the folks who contribute to flutter by example"}
                />
                <MainContentWrapper>
                    <div style={{margin: '50px 0'}}>
                        <h1 style={{fontSize: 45, margin: 0, padding: 0}}>
                            Tag: {tag.title}
                        </h1>
                    </div>
                    <h2>Articles</h2>
                    <ul style={{listStyle: 'none'}}>
                        {postEdges.map((post, index) => (
                            <li style={{margin: "0 0 30px"}}>
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
                    <h2>Tutorials</h2>
                    <ul style={{listStyle: 'none'}}>
                        {tutorialEdges.map((tut, index) => (
                            <li style={{margin: "0 0 30px"}}>
                                <PostItemContainer
                                    key={tut.node.id}
                                    authorName={tut.node.author.username}
                                    title={tut.node.title}
                                    slug={tut.node.slug}

                                />
                            </li>
                        ))}
                    </ul>
                </MainContentWrapper>
            </Layout>
        );
    }
}

export default Tags
export const tagsQuery = graphql`
    query postsForTag($tag: String!){
        strapiTag(title: {eq: $tag}) {
            title
        }
        allStrapiBlogPost(filter: {tags: {elemMatch: {title: {eq: $tag}}}}) {
            edges {
                node {
                    title
                    created_at(formatString: "dddd, Do of MMMM, YYYY")
                    slug
                    user {
                        username
                    }
                }
            }
        }
        allStrapiTutorial(filter: {tags: {elemMatch: {title: {eq: $tag}}}}) {
            edges {
                node {
                    title
                    created_at
                    lessons {
                        title
                    }
                    category
                    author {
                        username
                    }
                }
            }
        }
    }

`