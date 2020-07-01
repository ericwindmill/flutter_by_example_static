import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { colors } from "../styles/colors";
import { spacing } from "../styles/spacing";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <NavList>
          <NavListItem>
            <Link to={"/"}>Tutorials</Link>
          </NavListItem>
          <NavListItem>
            <Link to={"/contributors"}>Contributors</Link>
          </NavListItem>
          <NavListItem>
            <Link to={"/blog"}>Blog</Link>
          </NavListItem>
          <NavListItem>
            <a href={"https://www.manning.com/books/flutter-in-action"}>Book</a>
          </NavListItem>
        </NavList>
      </nav>
    );
  }
}

export default Navigation;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: ${spacing.scale(2)};
`;

const NavListItem = styled.li`
  padding: 0;
  margin: 0;
  font-size: 20px;
  color: ${colors.flutterBlue};

  * {
  }

  *:visited {
    color: ${colors.flutterBlue};
  }
`;
