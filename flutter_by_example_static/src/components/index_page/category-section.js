import React from "react";
import TutorialLessonList from "./tutorial-lesson-list";

class CategorySection extends React.Component {

    tutorialNode(tutorialTitle, documents) {
        return documents.filter(tutorialNode => {
            return tutorialNode.node.title === tutorialTitle;
        })[0];
    }

    render() {
        const {tutorials, tocSubsection} = this.props;
        return (
            Object.entries(tocSubsection).map((tutorialToc, index) => {
                let tutorialTitle = tutorialToc[0];
                let lessonTitlesForTutorial = tutorialToc[1];
                let tutorialNode = this.tutorialNode(tutorialTitle, tutorials);
                if (tutorialNode === undefined) {
                    return <div key={'_' + Math.random().toString(36).substr(2, 9)} />;
                }
                return <TutorialLessonList
                    key={tutorialNode.node.id}
                    lessons={tutorialNode.node.lessons}
                    lessonsSubToc={lessonTitlesForTutorial}
                    tutorialTitle={tutorialTitle}
                    authorName={tutorialNode.node.author.username}
                />
            })
        )
    }


}

export default CategorySection