import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

class AuthorItemContainer extends React.Component {
    render() {
        const {author} = this.props;
        return (
            <Container>
                <h2>{author.username}</h2>
                <ul>
                    <li>
                        <Link to={'/'}>
                            @{author.twitter} on Twitter
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            Other Articles
                        </Link>
                    </li>
                </ul>
            </Container>

        )
    }
}

const Container = styled.div`
  display: flex;
  align-items: center;
`

export default AuthorItemContainer