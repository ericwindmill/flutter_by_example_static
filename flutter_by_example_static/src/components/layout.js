import React from "react";
import {rhythm} from "../utils/typography";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import {
    FullWidthContentWrapper,
    MainContentWrapper,
    Wrapper
} from "../styles/styled_components/layout";
import Image from "gatsby-image";
import {graphql, Link, StaticQuery} from "gatsby";
import {spacing} from "../styles/spacing";
import {colors} from "../styles/colors";
import SideTableOfContents from "./lesson_page/side-table-of-contents";
import "../styles/globals.css";

class Layout extends React.Component {
    render() {
        const {location, tutorialLessons, post, children} = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        const isLessonPage = location.pathname.includes("/lesson/");
        let header = <StaticQuery
            query={layoutQuery}
            render={data => {
                {
                    if (location.pathname === rootPath) {

                        return <div>
                            <div
                                style={{
                                    borderBottom: "1px solid black",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: `${spacing.scale(2.5)} 0`
                                }}
                            >
                                <Image
                                    fluid={data.avatar.childImageSharp.fluid}
                                    alt={"flutter logo"}
                                    style={{
                                        marginRight: rhythm(2),
                                        width: 130
                                    }}
                                />
                                <div>
                                    <h1 style={{fontSize: 45}}>Flutter by Example</h1>
                                    <h2>A complete Dart and Flutter tutorial</h2>
                                </div>
                            </div>
                            <Navigation/>
                        </div>

                    } else {

                        return (<div>
                            <Link to={"/"}>
                                <div
                                    style={{
                                        borderBottom: "1px solid black",
                                        alignItems: "center",
                                        display: "flex",
                                        padding: `${spacing.scale(1)} 0`
                                    }}
                                >
                                    <Image
                                        fluid={data.avatar.childImageSharp.fluid}
                                        alt={"flutter logo"}
                                        style={{
                                            marginRight: rhythm(1),
                                            width: 40
                                        }}
                                    />
                                    <h1 style={{color: `${colors.googleGrey600}`}}>
                                        Flutter by Example
                                    </h1>
                                </div>
                            </Link>
                            <Navigation/>
                        </div>);

                    }

                }
            }}

        />


        return (
            <Wrapper>
                <MainContentWrapper>
                    <header>{header}</header>
                </MainContentWrapper>
                <main>{children}</main>
                <FullWidthContentWrapper>
                    <Footer/>
                </FullWidthContentWrapper>
                {isLessonPage && (
                    <SideTableOfContents
                        lessonNodes={tutorialLessons}
                        tutorialTitle={post.tutorial.title}
                    />
                )}
            </Wrapper>
        );
    }
}

export default Layout;

export const layoutQuery = graphql`
    query LayoutQuery {
        avatar: file(absolutePath: { regex: "/logo_flutter.png/" }) {
            childImageSharp {
                fluid(maxWidth: 130) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;