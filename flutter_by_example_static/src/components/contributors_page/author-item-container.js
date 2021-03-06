import React from "react"
import styled from "styled-components"
import {colors} from "../../styles/colors";
import {spacing} from "../../styles/spacing";
import AuthorListOfArticles from "./author-list-of-articles";

class AuthorItemContainer extends React.Component {
    render() {
        const {author} = this.props;
        return (
            <Container>
                <div style={{
                    borderRadius: "50%",
                    background: `${colors.dartPrimary}`,
                    color: "white",
                    minWidth: 75,
                    width: 75,
                    height: 75,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: `${spacing.scale(3)}`,
                    marginRight: "50px",
                }}>
                    {author.username[0]}
                </div>
                <div>
                    <h2 style={{margin: '0 0 10px 0'}}>{author.username}</h2>
                    <p style={{margin: '10px 0 5px'}}>{author.bio}</p>
                    <ul style={{display: 'flex', listStyle: 'none', margin: 0, padding: 0}}>
                        <li style={{margin: 0}}>
                            <a href={`https://twitter.com/${author.twitter}`} style={{lineHeight: 0, margin: 0, padding:0}}>
                                @{author.twitter} on Twitter
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${author.email}`}>
                                email
                            </a>
                        </li>
                    </ul>
                    <AuthorListOfArticles
                        articles={author.blog_posts}
                        tutorials={author.tutorials}
                        />
                </div>
            </Container>


        )
    }
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
`

export default AuthorItemContainer