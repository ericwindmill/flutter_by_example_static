import React from "react";
import styled from 'styled-components';
import {rhythm, scale} from "../utils/typography";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {graphql, StaticQuery} from "gatsby";
import AuthorItemContainer from "../components/contributors_page/author-item-container";

class Contributors extends React.Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <SEO
                    title={"Flutter by example contributors"}
                    description={"A list of the folks who contribute to flutter by example"}
                />
            <div>
                <h1>Contributors</h1>
                <StaticQuery
                    query={contributorsQuery}
                    render={data => {
                        const authors = data.allStrapiUser.edges;
                        return (
                            <ul>
                                {authors.map((author, index) => (
                                    <li>
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
            </div>
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