import React from "react";
import styled from "styled-components";
import {colors} from "../../styles/colors";
import {Link} from "gatsby";
import {device} from "../../styles/media";

class SideTableOfContents extends React.Component {

    lessonNode(lessonTitle, documents) {
        const lesson =  documents.filter(lessonNode => {
            return lessonNode.title === lessonTitle;
        });
        // returns array with 1 item
        return lesson[0];
    }

    render() {
        const {lessons} = this.props.lessonNodes;
        const {tutorialTitle, tableOfContentsForTutorial} = this.props;
        const tutorialContents = tableOfContentsForTutorial[1];
        return (
            <ToCContainer>
                <div>
                    <h4>{tutorialTitle}</h4>
                </div>
                <ol>
                    {tutorialContents.map((lessonTitle) => {
                        const lesson = this.lessonNode(lessonTitle, lessons);
                        if (lesson === undefined) {
                            return <div key={'_' + Math.random().toString(36).substr(2, 9)} />;
                        }
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
    right: -300px;
    top: 0;
   
    @media ${device.laptop} { 
        right: 0;
    }
`;