import React from "react";
import styled from 'styled-components';
import {rhythm, scale} from "../utils/typography";
import Layout from "../components/layout";
import SEO from "../components/seo";

class Contributors extends React.Component {
    render() {
        return (
            <Layout location={this.props.location}>
                <SEO
                    title={"Flutter by example contributors"}
                    description={"A list of the folks who contribute to flutter by example"}
                />
            <div>
                <h1>Contributors</h1>
            </div>
            </Layout>
        );
    }
}

export default Contributors;
