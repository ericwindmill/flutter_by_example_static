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
                        padding: `${spacing.scale(5)}`,
                        background: `${colors.themeBackground}`,
                        color: `${colors.white}`
                    }}>
                        <div style={{width: 800, margin: "auto", borderBottom: `1px solid ${colors.white}`,}}>
                            <MailChimp/>
                            <SocialLinks/>
                        </div>
                        <div style={{border: `1px solid ${colors.primary}`, display: 'flex',}}>
                            <div>You can get all this content and more in one place. Check out my new book Flutter in
                                Action</div>
                            <Image
                                fixed={data.avatar.childImageSharp.fixed}
                                alt={'flutter in action book cover'}
                                style={{
                                    marginRight: rhythm(2),
                                    minHeight: 100,
                                }}
                            />
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
        fixed(height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;