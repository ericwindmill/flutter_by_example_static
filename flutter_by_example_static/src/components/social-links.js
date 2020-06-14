import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";
import {colors} from "../styles/colors";
import {spacing} from "../styles/spacing";

class SocialLinks extends React.Component {
    render() {
        return (
            <SocialLinkList>
               <ListItem>
                   <p>Elsewhere:</p>
               </ListItem>
                <ListItem>
                   <Link to={'https://www.youtube.com/channel/UCNVrhIPfoA6otGTvlzYb7DA/'}>YouTube Channel</Link>
                </ListItem>
                <ListItem>
                   <Link to={'https://twitter.com/ericwindmill'}>Twitter</Link>
                </ListItem>
                <ListItem>
                   <Link to={'https://github.com/ericwindmill/flutter_by_example_static'}>Github</Link>
               </ListItem>
                <ListItem>
                    <Link to={'https://www.manning.com/books/flutter-in-action'}>Book</Link>
                </ListItem>
            </SocialLinkList>
        );
    }
}

export default SocialLinks;

const SocialLinkList = styled.ul`
    display: flex;
    justify-content:space-between;
    list-style: none;
    margin: ${spacing.scale(6)} 0px;
`;

const ListItem = styled.li`
    padding: 0;
    margin: 0;    
    font-size: 20px;
    
    a {
        color: ${colors.flutterBlue};
     }
    
    *:visited {
        color: ${colors.flutterBlue};
        
    }
`;