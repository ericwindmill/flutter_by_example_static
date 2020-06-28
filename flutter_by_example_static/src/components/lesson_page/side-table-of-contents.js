import React from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors";
import {Link} from "gatsby";

class SideTableOfContents extends React.Component {

    render() {
        const {lessons} = this.props.lessonNodes;
        const {tutorialTitle} = this.props;
        return (
            <ToCContainer>
                <div>
                    <h4>{tutorialTitle}</h4>
                </div>
                <ol>
                    {lessons.map((lesson, index) => {
                        return <li>
                            <Link to={`/lesson/${lesson.slug}`}>{lesson.title}</Link>
                        </li>
                    })}
                </ol>
            </ToCContainer>
        );
    }
}

export default SideTableOfContents

const ToCContainer = styled.div`
    height: 100vh;
    width: 300px;
    background: white;
    padding: 20px;
    border-left: 1px solid ${colors.googleGrey100};
    position: fixed;
    right: 0;
    top: 0;
`;