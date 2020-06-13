import React from "react";
import {StaticQuery, Link, graphql} from 'gatsby';
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

    render() {
        return (
            <StaticQuery
                query={tableOfContentsQuery}
                render={data =>
                    <TOCContainer>
                        <div style={{textAlign: 'center', margin: spacing.scale(2)}}>
                            <h2>Table of Contents</h2>
                        </div>
                        <SectionHeader part={1} title={'Dart'}/>
                        <CategorySection sections={this.documentsByCategory(data.allStrapiTutorial.edges, 'Dart')}/>
                        <SectionHeader part={2} title={'Flutter'}/>
                        <CategorySection sections={this.documentsByCategory(data.allStrapiTutorial.edges, 'Flutter')}/>
                    </TOCContainer>
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
        lessons {
          title
          author
          id
          slug
        }
      }
    }
  }
}
`