import React from "react";
import {StaticQuery, graphql} from 'gatsby';
import {TOCContainer} from "../../styles/styled_components/table_of_contents";
import SectionHeader from "./section-header";
import {spacing} from "../../styles/spacing";
import CategorySection from "./category-section";

class TableOfContents extends React.Component {

    documentsByCategory(documents, category) {
        return documents.filter(doc => {
            return doc.node.category === category;
        });
    }

    fromJson(json) {
        return JSON.parse(json);
    }

    render() {
        return (
            <StaticQuery
                query={tableOfContentsQuery}
                render={(data) => {
                    return (<TOCContainer>
                        <div style={{textAlign: 'center', margin: spacing.scale(2)}}>
                            <h2>Table of Contents</h2>
                        </div>
                        {Object.entries(this.fromJson(data.strapiTableOfContents.contents)).map(
                            (category, index) => {
                                return (
                                    // {/*Top level is `Dart`, `Flutter`, `Flutter UI Example Apps`, etc*/}
                                    <div key={`category-key-${index}-${category[0]}`}>
                                        <SectionHeader
                                            part={index + 1}
                                            title={category[0]}
                                        />
                                        {/*
                                        pass in list of all tutorials, which contain lessons
                                        as well as an object of all the tutorials in this category
                                        from the TOC. i.e.:
                                            {
                                                'Getting Started with Dart': [
                                                    'About Dart'
                                                    'Install Dart'
                                                    ... etc ...
                                                ],
                                                'Dart Fundamentals': [
                                                    'Values and Variables',
                                                    'Comments'
                                                    ...etc...
                                                ],
                                                ... etc ...
                                            }
                                        */}
                                        <CategorySection
                                            tutorials={this.documentsByCategory(data.allStrapiTutorial.edges, category[0])}
                                            tocSubsection={category[1]}
                                        />
                                    </div>
                                )
                            })}
                    </TOCContainer>)
                }
                }
            />
        );
    }
}


export default TableOfContents

const tableOfContentsQuery = graphql`
query TableOfContentsQuery {
  allStrapiTutorial {
    edges {
      node {
        id
        title
        category
        author {
          username
        }
        lessons {
          title
          id
          slug
          created_at
        }
      }
    }
  }
  strapiTableOfContents {
    contents
  }
}

`