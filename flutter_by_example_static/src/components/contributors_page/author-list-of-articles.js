import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {colors} from "../../styles/colors";
import {spacing} from "../../styles/spacing";

class AuthorListOfArticles extends React.Component {
    render() {
        const {articles, tutorials} = this.props;
        return (
            <div>
              <p><strong>Contributions</strong></p>
            <dl>
                <dt>Articles</dt>
                <dd>{articles.map((a, index) => {

                })}</dd>
                <dt>Tutorials</dt>
                <dd>{tutorials.map((t, index) => {

                })}</dd>
            </dl>
            </div>

        )
    }
}


export default AuthorListOfArticles