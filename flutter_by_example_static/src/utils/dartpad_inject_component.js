import React from "react";

class DartPadInjectComponent extends React.Component {

    componentDidMount() {
        const script = document.createElement('script')
        script.src = "https://dartpad.dev/inject_embed.dart.js"
        script.async = true;
        this.instance.appendChild(script)
    }

    render() {
        return <div ref={el => (this.instance = el)} className="dartpad" />;
    }
}

export default DartPadInjectComponent