const codeBackgroundColor = "#f8f9fa";
const codeDefaultColor = "#212529";
const codeBlue = "#00677a"; // methods
const codePurple = "#7500A0"; // variables
const codePink = '#BC0056'; // strings, class names
const codeMutedPink = '#a54a78';
// const codeGrey = '#6E6E70'; //comments
// const codeGreen = '#007a27'; // keywords

export default {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": codeBackgroundColor,
        "color": codeDefaultColor,
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": codeBackgroundColor,
        "color": "#57718e",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#6b8aae"
    },
    "prolog": {
        "color": "#4a5f78"
    },
    "doctype": {
        "color": "#4a5f78"
    },
    "cdata": {
        "color": codePink
    },
    "punctuation": {
        "color": codeDefaultColor,
    },
    "namespace": {

    },
    "tag": {
        "color": "#0aa370"
    },
    "operator": {
        "color": codeDefaultColor
    },
    "number": {
        "color": codePink
    },
    "property": {
        "color": "#57718e"
    },
    "function": {
        "color": codeBlue
    },
    "class-name": {
        "color": codeMutedPink,
    },
    "tag-id": {
        "color": "#ebf4ff"
    },
    "selector": {
        "color": "#ebf4ff"
    },
    "atrule-id": {
        "color": "#ebf4ff"
    },
    "code.language-javascript": {
        "color": "#7eb6f6"
    },
    "attr-name": {
        "color": "#7eb6f6"
    },
    "code.language-css": {
        "color": "#47ebb4"
    },
    "code.language-scss": {
        "color": "#47ebb4"
    },
    "boolean": {
        "color": codePink,
    },
    "string": {
        "color": codePink,
    },
    "entity": {
        "color": "#47ebb4",
        "cursor": "help"
    },
    "url": {
        "color": "#47ebb4"
    },
    ".language-css .token.string": {
        "color": codePink
    },
    ".language-scss .token.string": {
        "color": codePink
    },
    ".style .token.string": {
        "color": codePink,
    },
    "attr-value": {
        "color": "#47ebb4"
    },
    "keyword": {
        "color": codeDefaultColor,
    },
    "control": {
        "color": "#47ebb4"
    },
    "directive": {
        "color": "#47ebb4"
    },
    "unit": {
        "color": "#47ebb4"
    },
    "statement": {
        "color": "#47ebb4"
    },
    "regex": {
        "color": "#47ebb4"
    },
    "atrule": {
        "color": "#47ebb4"
    },
    "placeholder": {
        "color": "#47ebb4"
    },
    "variable": {
        "color": codePurple,
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #ebf4ff",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#7eb6f6"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #34659d",
        "OutlineOffset": ".4em"
    },
    ".line-numbers .line-numbers-rows": {
        "borderRightColor": "#1f2932"
    },
    ".line-numbers-rows > span:before": {
        "color": "#2c3847"
    },
    ".line-highlight": {
        "background": "linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"
    },
};