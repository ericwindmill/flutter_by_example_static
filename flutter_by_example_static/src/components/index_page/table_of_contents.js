import React from "react";
import {StaticQuery, Link, graphql} from 'gatsby';

class TableOfContents extends React.Component {
    render() {
        return (
            <StaticQuery
                query={tableOfContentsQuery}
                render={ data =>
                    <ul>
                        {data.allStrapiTutorial.edges.map(document => (
                            <li key={document.node.id}>
                                {console.log(document.node)}
                                <p>{document.node.title} by {document.node.lessons[0].author}</p>
                                <ul>
                                    {document.node.lessons.map(lesson => (
                                        <li key={lesson.id}>
                                            <Link to={lesson.slug}>
                                                {lesson.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            ))}
                    </ul>
                }
            />
        );
    }
}


export default  TableOfContents

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