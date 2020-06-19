import React from "react"
import {rhythm} from "../utils/typography"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import {FullWidthContentWrapper, MainContentWrapper, Wrapper} from "../styles/styled_components/layout";
import Image from "gatsby-image";
import {graphql, StaticQuery} from "gatsby";
import {spacing} from "../styles/spacing";

class Layout extends React.Component {
    render() {
        const {location, children} = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;
        if (location.pathname === rootPath) {
            header = (
                <div>
                    <div style={{
                        borderBottom: "1px solid black",
                        display: 'flex',
                        alignItems: "center",
                        padding: `${spacing.scale(2.5)} 0`,
                    }}>
                        <StaticQuery
                            query={layoutQuery}
                            render={data => {
                                return (
                                    <Image
                                        fluid={data.avatar.childImageSharp.fluid}
                                        alt={'flutter logo'}
                                        style={{
                                            marginRight: rhythm(2),
                                            width: 130,
                                        }}
                                    />
                                )
                            }}
                        />
                        <div>
                            <h1 style={{fontSize: 45}}>Flutter by Example</h1>
                            <h2>A complete Dart and Flutter tutorial</h2>
                        </div>
                    </div>
                    <Navigation/>
                </div>
            );
        } else {
            header = (
                <div>
                    <div style={{
                        borderBottom: "1px solid black",
                        alignItems: "center",
                        display: 'flex',
                        padding: `${spacing.scale(1)} 0`,
                    }}>
                        <StaticQuery
                            query={layoutQuery}
                            render={data => {
                                return (
                                    <Image
                                        fluid={data.avatar.childImageSharp.fluid}
                                        alt={'flutter logo'}
                                        style={{
                                            marginRight: rhythm(1),
                                            width: 40,
                                        }}
                                    />
                                )
                            }}
                        />
                        <h1>Flutter by Example</h1>
                    </div>
                    <Navigation/>
                </div>
            );
        }
        return (
            <Wrapper>
                <MainContentWrapper>
                    <header>{header}</header>
                </MainContentWrapper>
                <main>{children}</main>
                <FullWidthContentWrapper>
                    <Footer/>
                </FullWidthContentWrapper>
            </Wrapper>
        )
    }
}


export default Layout

const layoutQuery = graphql`
  query LayoutQuery {
    avatar: file(absolutePath: { regex: "/logo_flutter.png/" }) {
      childImageSharp {
        fluid(maxWidth: 130){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;