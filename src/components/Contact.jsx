import React, { Component } from "react";
import styled from "styled-components";
import contactPic from "../images/contact-me-img.JPG";

const RoundedButton = styled.button`
  padding: 10px 0;
  border-radius: 20px;
  background-color: transparent;
  color: ${(props) => props.color};
  font-weight: 500;
  font-size: 16px;
  padding: 8px 60px;
  border: 3px solid ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.color};
    color: #212f3c;
    ${(props) => props.hover};
  }
`;

const Wrapper = styled.section`
  padding: 4em;
  background: ${(props) => props.background_color};
`;

const SecHead = styled.h1`
  font-size: 2em;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: ${(props) => props.color};
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-around;
`;

const ParagraphContainer = styled.div`
  max-width: 960px;
  margin: auto;
`;

const ContactPic = styled.img`
  max-width: 1000px;
  max-height: 8000px;
  max-width: 40%;
  height: auto;
  width: auto;
  float: left;
`;

const SubHeader = styled.li`
  font-size: 1.5em;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: ${(props) => props.color};
  font-style: bold;
`;
const ButtonLink = styled.a`
  text-decoration: none;
`;

const InfoList = styled.ul`
  list-style-type: none;
`;
const InfoListItem = styled.li`
  font-size: 1.25em;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: ${(props) => props.color};
`;

class Contact extends Component {
  render() {
    return (
      <div id="Contact">
        <Wrapper className="Contact" background_color="#212F3C">
          <SecHead color="#D6EAF8"> </SecHead>
          <ParagraphContainer>
            <FlexContainer>
              <ContactPic src={contactPic} />
              <InfoList>
                <SecHead color="#D6EAF8">Contact Me</SecHead>
                <SubHeader color="#D6EAF8">
                  Please feel free to contact me with any suggestions,
                  questions, comments, or inquiries!
                </SubHeader>
                <br />
                <br />
                <InfoListItem color="#D6EAF8">
                  <ButtonLink href="mailto:sbein@umich.edu">
                    <RoundedButton type="submit" color="#D6EAF8">
                      Email Me
                    </RoundedButton>
                  </ButtonLink>
                </InfoListItem>
                <br />
                <InfoListItem color="#D6EAF8">
                  <ButtonLink
                    href="https://www.linkedin.com/in/scott-beinlich/"
                    target="_blank"
                  >
                    <RoundedButton type="submit" color="#D6EAF8">
                      LinkedIn
                    </RoundedButton>
                  </ButtonLink>
                </InfoListItem>
                <br />
                <InfoListItem color="#D6EAF8">
                  <ButtonLink
                    href="https://github.com/sbeinlich"
                    target="_blank"
                  >
                    <RoundedButton type="submit" color="#D6EAF8">
                      GitHub
                    </RoundedButton>
                  </ButtonLink>
                </InfoListItem>
              </InfoList>
            </FlexContainer>
          </ParagraphContainer>
        </Wrapper>
      </div>
    );
  }
}

export default Contact;
