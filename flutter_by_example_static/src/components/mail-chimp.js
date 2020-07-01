import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../styles/colors";

class MailChimp extends Component {
  render() {
    return (
      <OptInContainer>
        <h3 style={{ margin: 0, textAlign: "center" }}>
          Sign up for infrequent updates about Flutter and Dart.
        </h3>
        <div id="mc_embed_signup">
          <form
            action="https://ericwindmill.us14.list-manage.com/subscribe/post?u=ba4877332e56c5f5d88603650&amp;id=c03985072c"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email address"
                  className="email input-text"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" />
                <div className="response" id="mce-success-response" />
              </div>
              <div className="HideMe">
                <input
                  defaultValue=""
                  type="text"
                  name="b_ba4877332e56c5f5d88603650_b1bfca0682"
                  tabIndex="-1"
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Get Updates"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </OptInContainer>
    );
  }
}

const OptInContainer = styled.div`
#mc_embed_signup_scroll {
  display: grid;
  grid-template-areas: "input submitButton";
  grid-template-columns: 1fr 200px;
  grid-gap: 20px;
  padding: 12px;
  border-radius: 3px;
  margin-bottom: 25px;
  
  .mc-field-group {
    grid-area: input; 
    width: 100%;
  }
  .clear {
    grid-area: submitButton;
    width: 100%;
  }
  .input-text {
    width: 100%;
    background: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    padding: 15px 5px 15px;
    transition: all .3s ease;
    &::-webkit-input-placeholder {
     
    }
    &:focus {
      outline: none;
      background: ${colors.googleGrey50};
    }
  }

  .button {
    width: 100%;
    height: 56px;
    text-align: center;
    border: none;
    border-radius: 5px;
    background: ${colors.flutterBlue};
    color: ${colors.white};
    font-size: 1.5rem;
    padding: 0 10px;
    transition: 300ms all ease;
    &:hover {
      background: ${colors.primary};
      cursor: pointer;
    }
  }
}

  .HideMe {
    position: absolute;
    left: -5000px;
  }
}
`;

export default MailChimp;
