import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {colors} from "../../styles/colors";
import {spacing} from "../../styles/spacing";

class AuthorItemContainer extends React.Component {
    render() {
        const {author} = this.props;
        return (
            <Container>
                <div style={{
                    borderRadius: "100%",
                    background: `${colors.dartPrimary}`,
                    color: "white",
                    width: 100,
                    height: 100,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: `${spacing.scale(3)}`,
                    marginRight: 50,
                }}>
                    {author.username[0]}
                </div>
                <div>
                    <h2 style={{margin: '10px 0'}}>{author.username}</h2>
                    <ul>
                        <li>
                            <Link to={'/'}>
                                @{author.twitter} on Twitter
                            </Link>
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>
            </Container>


        )
    }
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

export default AuthorItemContainer