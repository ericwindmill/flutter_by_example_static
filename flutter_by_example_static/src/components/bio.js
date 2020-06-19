/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import {rhythm} from "../utils/typography"

class Bio extends React.Component {

    render() {
        const {author} = this.props;
        console.log(author);
        return (
            <Container>
                <Image
                    fluid={author.profile_image.childImageSharp.fluid}
                    alt={author.username}
                    style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        minWidth: 50,
                        borderRadius: `100%`,
                        width: 75,
                    }}
                    imgStyle={{
                        borderRadius: `50%`,
                    }}
                />
                <p>
                    Written by <strong>{author.username}</strong>.
                    {` `}
                    <a href={`https://twitter.com/${author.twitter}`}>
                        You should follow him on Twitter.
                    </a>
                </p>
            </Container>

        )
    }
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

export default Bio
