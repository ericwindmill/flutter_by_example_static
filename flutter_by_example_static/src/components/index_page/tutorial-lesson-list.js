import React from "react";
import {Link} from "gatsby";
import {spacing} from "../../styles/spacing";
import styled from 'styled-components';
import {colors} from "../../styles/colors";

class TutorialLessonList extends React.Component {

    lessonNode(lessonTitle, documents) {
        return documents.filter(lessonNode => {
            return lessonNode.title === lessonTitle;
        })[0];
    }

    render() {
        const {lessons, tutorialTitle,lessonsSubToc} = this.props;
        return (
            <div style={{margin: `${spacing.scale(2)} 0`,  counterIncrement: "a"}}>
                <div style={{
                    borderBottom: "solid black 1px",
                    margin: `${spacing.scale(2)} 0`,
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <h2 style={{margin: "5px 0px"}}>{tutorialTitle}</h2>
                </div>
                <ul style={{listStyle: "none", display: 'flex', flexFlow: 'column wrap'}}>
                    {Object.entries(lessonsSubToc).map((lessonTitle, index) => {
                        let lesson = this.lessonNode(lessonTitle[1], lessons);
                        if (lesson === undefined) {
                            return <div key={'_' + Math.random().toString(36).substr(2, 9)} />;
                        }
                        return <Link key={`lesson-link-key-${lesson.id}`} to={`lesson/${lesson.slug}`} style={{counterIncrement: "b"}}>
                            <LessonLink key={lesson.id}>{lesson.title}</LessonLink>
                        </Link>

                    })}
                </ul>
            </div>
        );
    }
}


export default TutorialLessonList

const LessonLink = styled.li`
   font-size: 20px;
   color: ${colors.flutterBlue};
   cursor: pointer;
   margin: 0; 
   padding: 0;
   &:hover {
        background-color: ${colors.googleGrey50};
             color: ${colors.primary};
   }
   &:before {
        content: counter(a) "." counter(b) " ";
    }
`;