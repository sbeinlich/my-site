import React, { Component } from "react";
import styled from "styled-components";
import {
  Card,
  CardBody,
  CardImageHeader,
  CardText,
  CardTitle,
} from "styled-card-component";
import mySiteImg from "../images/my-site-img.png";
import mhacksImg from "../images/MhacksLogo.jpg";
import instagramImg from "../images/instagram.jpg";
import slackImg from "../images/slack.jpg";

import RoundedButton from "./RoundedButton";

const ButtonLink = styled.a`
  text-decoration: none;
`;
const Wrapper = styled.section`
  padding: 3em;
  background: ${(props) => props.background_color};
`;
const SecHead = styled.h1`
  font-size: 2em;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: ${(props) => props.color};
`;

const Body = styled.p`
  font-size: 1.25em;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #212f3c;
  margin-left: 150px;
  margin-right: 150px;
`;

const Disclaimer = styled.p`
  font-size: 12;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: #212f3c;
  margin-left: 150px;
  margin-right: 150px;
`;

const CardDiv = styled.div`
  display: table;
  width: 100%;
  border-spacing: 1em;
`;

const ParagraphContainer = styled.div`
  max-width: 960px;
  margin: auto;
`;
class Projects extends Component {
  render() {
    return (
      <div id="Projects">
        <Wrapper className="Projects" background_color="#D6EAF8">
          <SecHead color="#212F3C">Projects</SecHead>
          <ParagraphContainer>
            <Body>
              Here are some short descriptions of some CS-related projects I've
              worked on.
            </Body>

            <CardDiv>
              <Card
                width="18rem"
                font-family="'Lato', sans-serif"
                color="#212F3C"
                borderColor="#212F3C"
                display="table-cell"
              >
                <CardImageHeader src={slackImg} />
                <CardBody>
                  <CardTitle>Slack Mentorship Bot</CardTitle>
                  <CardText>
                    Slack Mentorship Bot leveraging Slack API, Express, and
                    Node.js to automate ‘hacker’ inquiry and mentor pairing
                    workflow at MHacks.
                  </CardText>
                  <ButtonLink
                    href="https://github.com/mhacks/mhacks-web/blob/master/server/routes/api/mentorshipbot.js"
                    target="_blank"
                  >
                    <RoundedButton type="submit" color="#212F3C">
                      Github Repository
                    </RoundedButton>
                  </ButtonLink>
                </CardBody>
              </Card>

              <Card
                width="18rem"
                font-family="'Lato', sans-serif"
                color="#212F3C"
                borderColor="#212F3C"
                display="table-cell"
              >
                <CardImageHeader src={mhacksImg} />
                <CardBody>
                  <CardTitle>MHacks Web App</CardTitle>
                  <CardText>
                    I help maintain and update the official MHacks Hackathon Web
                    Application, implementing new features between hackathons!
                    We use a MERN Stack (MongoDB, Express, React/Redux,
                    Node.js).
                    <br />
                    <br />
                    <ButtonLink
                      href="https://github.com/mhacks/mhacks-web"
                      target="_blank"
                    >
                      <RoundedButton type="submit" color="#212F3C">
                        Github Repository
                      </RoundedButton>
                    </ButtonLink>
                    <br />
                    <br />
                    <ButtonLink href="https://mhacks.org/" target="_blank">
                      <RoundedButton type="submit" color="#212F3C">
                        MHacks Site
                      </RoundedButton>
                    </ButtonLink>
                  </CardText>
                </CardBody>
              </Card>
            </CardDiv>
            <CardDiv>
              <Card
                width="18rem"
                font-family="'Lato', sans-serif"
                color="#212F3C"
                borderColor="#212F3C"
                display="table-cell"
              >
                <CardImageHeader src={mySiteImg} />
                <CardBody>
                  <CardTitle>My Personal Site</CardTitle>
                  <CardText>The source code for this site!</CardText>
                  <ButtonLink
                    href="https://github.com/sbeinlich/my-site"
                    target="_blank"
                  >
                    <RoundedButton type="submit" color="#212F3C">
                      Github Repository
                    </RoundedButton>
                  </ButtonLink>
                </CardBody>
              </Card>

              <Card
                width="18rem"
                font-family="'Lato', sans-serif"
                color="#212F3C"
                borderColor="#212F3C"
                display="table-cell"
              >
                <CardImageHeader src={instagramImg} />
                <CardBody>
                  <CardTitle>Instagram Clone</CardTitle>
                  <CardText>
                    An Instagram-like client-side dynamic social media platform
                    that utilizes Python Flask backend, a SQLite database, a
                    ReactJS frontend and AJAX calls to a custom REST API.
                    <br />
                    <br />
                    <ButtonLink href="#Contact">
                      <RoundedButton type="submit" color="#212F3C">
                        Contact Me
                      </RoundedButton>
                    </ButtonLink>
                  </CardText>
                </CardBody>
              </Card>
            </CardDiv>

            <Disclaimer>
              <i>
                Some of these projects include unpublished code due to school
                and organizations rules. Please{" "}
                <a href="#Contact">contact me</a> if you have questions on my
                work.
              </i>
            </Disclaimer>
          </ParagraphContainer>
        </Wrapper>
      </div>
    );
  }
}

export default Projects;
