import React from "react"
import {graphql, StaticQuery} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TableOfContents from "../components/index_page/table_of_contents";
import Image from "gatsby-image";
import {FullWidthContentWrapper, MainContentWrapper} from "../styles/styled_components/layout";
import {colors} from "../styles/colors";
import SocialLinks from '../components/social-links'
import MailChimp from "../components/mail-chimp";

class IndexPage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter Personal Website";

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="Home"
                    keywords={[`blog`, `flutter`, `dart`, `provider`, `ios`, `kotlin`]}
                />
                <FullWidthContentWrapper>
                    <div style={{margin: "150px 0", display: "flex", justifyContent: "center"}}>
                        <StaticQuery
                            query={indexQuery}
                            render={data => {
                                return (
                                    <Image
                                        fixed={data.avatar.childImageSharp.fixed}
                                        alt={'hero image'}
                                    />
                                )
                            }}
                        />
                        <div style={{maxWidth: '400px', margin: '100px 0 0 30px'}}>
                            <h2>
                                How it's done. From the basics of Dart and Flutter to advanced topics with simple, but
                                detailed examples.
                            </h2>
                        </div>
                    </div>
                </FullWidthContentWrapper>
                <FullWidthContentWrapper>
                    <div style={{backgroundColor: colors.googleGrey100, padding: 100}}>
                        <div style={{width: 800, margin: "auto", textAlign: "center"}}>
                            <h1>Dart and Flutter for the people.</h1>
                            <h2>Real world examples and tutorials. And it'll always be free.</h2>
                            <div style={{margin: "30px 0"}}>
                                <SocialLinks/>
                            </div>
                            <MailChimp/>
                        </div>

                    </div>
                </FullWidthContentWrapper>
                <MainContentWrapper>
                    <TableOfContents/>
                </MainContentWrapper>
            </Layout>
        )
    }
}

export default IndexPage

const indexQuery = graphql`
  query indexQuery {
    avatar: file(absolutePath: { regex: "/hero_image.png/" }) {
      childImageSharp {
        fixed(height: 550) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;


