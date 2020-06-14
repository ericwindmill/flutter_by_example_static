import React from "react";
import TutorialLessonList from "./tutorial-lesson-list";

class CategorySection extends React.Component {

    tutorialNode(tutorialTitle, documents) {
        return documents.filter(tutorialNode => {
            return tutorialNode.node.title === tutorialTitle;
        })[0];
    }

    render() {
        {/*
         tocSubsection is from the table of contents. It's ToC metadata, used for ordering
          for example:
          tocSubsection = {
                 'Getting Started with Dart': [
                     'About Dart'
                     'Install Dart'
                     ... etc ...
                 ],
                 'Dart Fundamentals': [
                     'Values and Variables',
                     'Comments'
                     ...etc...
                 ],
                 ... etc ...
             }

            tutorials are the documents from the CMS themselves.
       */
        }
        const {tutorials, tocSubsection} = this.props;
        return (
            Object.entries(tocSubsection).map((tutorialToc, index) => {
                let tutorialTitle = tutorialToc[0];
                let lessonTitlesForTutorial = tutorialToc[1];
                let tutorialNode = this.tutorialNode(tutorialTitle, tutorials);
                if (tutorialNode === undefined) {
                    return <div />;
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