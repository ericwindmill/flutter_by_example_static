import React from "react";
import styled from "styled-components"
import {colors} from "../../styles/colors";
import {spacing} from "../../styles/spacing";
import {Link} from "gatsby";

class PostItemContainer extends React.Component {
    render() {
        const {authorName, title, date, tags, slug} = this.props;
        return (
            <div style={{
                border: `1px solid ${colors.googleGrey100}`,
                padding: `${spacing.grid["2"]}px`,
                borderRadius: 4,
            }}>

                <BioSection>
                    <h3>{authorName}</h3>
                    <p>{date}</p>
                </BioSection>
                <Link to={`blog/${slug}`}>
                    <h2 style={{fontSize: 40, margin: "20px 0", color: "black"}}>{title}</h2>
                </Link>
                <p style={{color: `${colors.googleGrey600}`, margin: "20px 0 0 0"}}>tags</p>
                <ul style={{listStyle: 'none'}}>
                    {tags && tags.map((tag) => {
                        return (
                            <Link to={`/tags/${tag}`}><TagListItem>{tag}</TagListItem></Link>
                        );
                    })}
                    {tags || <Link to={`/tags/flutter`}><TagListItem>#flutter</TagListItem></Link>}
                </ul>
            </div>
        );
    }
}

export default PostItemContainer;

const TagListItem = styled.li`
    margin: 10px 5px;
    font-size: 15px;
`

const BioSection = styled.div`
    margin: 10px 0;
    color: black;

    h3 {
        font-size: 20px;
        margin: 0;
        color: black;
    }
    
    p {
        font-size: 12px;
        color: ${colors.googleGrey600};
        margin: 5px 0 10px;
    }
`;