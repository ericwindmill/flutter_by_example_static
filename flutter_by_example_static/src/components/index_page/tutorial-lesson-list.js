import React from "react";
import {Link} from "gatsby";
import {spacing} from "../../styles/spacing";
import styled from 'styled-components';
import {colors} from "../../styles/colors";

class TutorialLessonList extends React.Component {
    render() {
        const {lessons, tutorialTitle, authorName} = this.props;
        return (
            <div style={{margin: `${spacing.scale(2)} 0`}}>
                <div style={{
                    borderBottom: "solid black 1px",
                    margin: `${spacing.scale(2)} 0`,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <h2 style={{margin: "5px 0px"}}>{tutorialTitle}{' '}</h2><h3
                    style={{margin: 0, padding: 0}}>&nbsp;  by {authorName}</h3>
                </div>
                <ul style={{listStyle: "none", display: 'flex', flexFlow: 'column wrap'}}>
                    {lessons.map(lesson => (

                        <Link to={`lesson/${lesson.slug}`}>
                            <LessonLink key={lesson.id}>{lesson.title}</LessonLink>
                        </Link>

                    ))}
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
`;