import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import highlight from './syntax-highlight';

class MarkdownSyntaxHighlighter extends React.PureComponent {
    render() {
        const {value} = this.props;
        return (
            <SyntaxHighlighter language={"dart"} style={highlight}>
                {value}
            </SyntaxHighlighter>
        );
    }
}

export default  MarkdownSyntaxHighlighter