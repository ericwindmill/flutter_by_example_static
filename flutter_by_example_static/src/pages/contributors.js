import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql, StaticQuery} from "gatsby";
import AuthorItemContainer from "../components/contributors_page/author-item-container";
import {MainContentWrapper} from "../styles/styled_components/layout";

class Contributors extends React.Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <SEO
                    title={"Flutter by example contributors"}
                    description={"A list of the folks who contribute to flutter by example"}
                />
            <MainContentWrapper>
                <div style={{margin: '50px 0'}}>
                    <h1 style={{fontSize: 45, margin: 0, padding: 0}}>Contributors</h1>
                </div>
                <StaticQuery
                    query={contributorsQuery}
                    render={data => {
                        const authors = data.allStrapiUser.edges;
                        return (
                            <ul style={{listStyle: 'none'}}>
                                {authors.map((author, index) => (
                                    <li style={{padding: 0, margin: 0}}>
                                        <AuthorItemContainer
                                            key={author.node.id}
                                            author={author.node}
                                        />
                                    </li>
                                ))}
                            </ul>
                        );


                    }}
                />
                <div style={{margin: '50px 0'}} />
            </MainContentWrapper>
            </Layout>
        );
    }
}

export default Contributors;


const contributorsQuery = graphql`
    query AllContributors {
        allStrapiUser {
            edges {
                node {
                    blog_posts {
                        title
                        updated_at
                        slug
                        id
                    }
                    tutorials {
                        id
                        title
                    }
                    username
                    twitter
                }
            }
        }
    }
`