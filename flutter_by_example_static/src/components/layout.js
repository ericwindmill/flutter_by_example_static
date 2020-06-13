import React from "react"
import {rhythm} from "../utils/typography"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import {FullWidthContentWrapper, MainContentWrapper, Wrapper} from "../styles/styled_components/layout";
import Image from "gatsby-image";
import {graphql, StaticQuery} from "gatsby";

class Layout extends React.Component {
    render() {
        const {location, children} = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;
        if (location.pathname === rootPath) {
            header = (
                <div>
                    <div style={{borderBottom: "1px solid black", display: 'flex', alignItems: "center", padding: "25px 0"}}>
                        <StaticQuery
                            query={layoutQuery}
                            render={data => {
                                return (
                                    <Image
                                        fixed={data.avatar.childImageSharp.fixed}
                                        alt={'flutter logo'}
                                        style={{
                                            marginRight: rhythm(2),
                                            minHeight: 100,
                                        }}
                                        imgStyle={{
                                            minHeight: 60,
                                        }}
                                    />
                                )
                            }}
                        />
                        <div>
                            <h1>Flutter by Example</h1>
                            <h2>A complete Dart and Flutter tutorial</h2>
                        </div>
                    </div>
                    <Navigation/>
                </div>
            );
        } else {
            header = (
                <div>
                    <h1>Flutter by Example</h1>
                    <Navigation/>
                </div>
            );
        }
        return (
            <Wrapper>
                    <MainContentWrapper>
                        <header>{header}</header>
                        <main>{children}</main>
                    </MainContentWrapper>
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
        fixed(width: 100, height: 130) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;