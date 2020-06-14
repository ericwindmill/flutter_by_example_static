import React from "react";
import {colors} from "../../styles/colors";
import {spacing} from "../../styles/spacing";

class SectionHeader extends React.Component {
    render() {
        const {part, title} = this.props;
        return (
            <div style={{display: 'flex', alignItems: 'center', margin: `${spacing.scale(6)} 0`}}>
                <span style={{
                    background: `${colors.flutterYellow}`,
                    color: `${colors.white}`,
                    borderRadius: 15,
                    padding: 10,
                    marginRight: 10,
                    fontSize: `${spacing.scale(2)}`,
                    minWidth: 90,
                    textAlign: 'center',
                    fontWeight: "bold",
                }}>
                    Part {part}
                </span>
                <h1>{title}</h1>
            </div>
        );
    }
}

export default SectionHeader
