import React from "react";
import {Link} from "gatsby";
import {spacing} from "../../styles/spacing";

class TutorialLessonList extends React.Component {
    render() {
        const {lessons, tutorialTitle, authorName, lessonsSubToc} = this.props;
        return (
            <div style={{margin: `${spacing.scale(2)} 0`}}>
                <div style={{borderBottom: "solid black 1px", margin: `${spacing.scale(2)} 0`, display:'flex', alignItems: 'center'}}>
                    <h2 style={{margin: "5px 0px"}}>{tutorialTitle}{' '}</h2><h3 style={{margin: 0, padding: 0}}>&nbsp;  by {authorName}</h3>
                </div>
                <ul style={{listStyle: "none"}}>
                    {lessons.map(lesson => (
                        <li key={lesson.id}
                            style={{margin: 0, padding: 0,}}
                        >
                            <Link to={lesson.slug}>
                                {lesson.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}


export default TutorialLessonList