import React from "react";
import {spacing} from "../styles/spacing";
import {colors} from "../styles/colors";
import MailChimp from "./mail-chimp";
import SocialLinks from "./social-links";
import {graphql, StaticQuery} from "gatsby";
import {rhythm} from "../utils/typography";
import Image from "gatsby-image";

class Footer extends React.Component {
    render() {
        return (
            <StaticQuery
                query={footerQuery}
                render={data => (
                    <div style={{
                        paddingTop: `${spacing.scale(5)}`,
                        background: `${colors.themeBackground}`,
                        color: `${colors.white}`
                    }}>
                        <div style={{width: 800, margin: "100px auto", borderBottom: `1px solid ${colors.white}`,}}>
                            <MailChimp/>
                            <SocialLinks/>
                        </div>
                        <a href={'https://www.manning.com/books/flutter-in-action'}>
                        <div style={{
                            border: `1px solid ${colors.primary}`,
                            borderRadius: 25,
                            display: 'flex',
                            alignItems: 'center',
                            width: 600,
                            margin: 'auto'
                        }}>
                            <Image
                                fluid={data.avatar.childImageSharp.fluid}
                                alt={'flutter in action book cover'}
                                style={{
                                    marginRight: rhythm(2),
                                    maxWidth: 300,
                                    minWidth: 300,
                                    flex: 0,
                                    borderRadius: "25px 0 0 25px",
                                }}
                            />
                            <h3 style={{marginRight: rhythm(2), color: colors.white}}>You can get all this content and more in one place. Check out my new book Flutter in
                                Action</h3>
                        </div>
                        </a>
                        <div style={{width: 800, margin: "100px auto 0", padding: "25px 0", borderTop: `1px solid ${colors.white}`,}}>
                            <ul style={{listStyle: 'none', display: 'flex'}}>
                                <li style={{margin: 0}}>&copy; 2018-2020 Eric Windmill</li>
                                <li><a href="">about the project</a></li>
                                <li><a href="">contact us</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            />
        );
    }
}

export default Footer


const footerQuery = graphql`
  query footerQuery {
    avatar: file(absolutePath: { regex: "/flutter-in-action.png/" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;