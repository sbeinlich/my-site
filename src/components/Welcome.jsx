import React, { Component } from "react";
import styled from "styled-components";
import currentPic from "../images/currentPic.png";
import linkedLogo from "../images/In-Black-34px-R.png";
import gitLogo from "../images/GitHub-Mark-32px.png";
import RoundedButton from "./RoundedButton.jsx";

const Title = styled.h1`
  font-size: 3em;
  font-family: "Lato", sans-serif;
  text-align: center;
  color: ${(props) => props.color};
`;

const Intro = styled.p`
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    text-align: center;
    color: ${(props) => props.color}
    margin-left: 150px;
    margin-right: 150px;
`;

const Wrapper = styled.section`
  padding: 3em;
  background: ${(props) => props.background_color};
`;

const Portrait = styled.img`
  max-width: 300px;
  min-width: 300px;
  height: auto;
`;
const LogoLink = styled.a`
  padding: 10px;
`;
const ButtonLink = styled.a`
  text-decoration: none;
`;

const ParagraphContainer = styled.div`
  max-width: 960px;
  margin: auto;
  height: auto;
  width: auto;
`;

class Welcome extends Component {
  constructor(props) {
    // Initialize mutable state
    super(props);

    this.state = {
      weather_description: "",
      weather_id: "",
    };

    this.handleWeatherChange = this.handleWeatherChange.bind(this);
  }

  componentDidMount() {
    // Call Weather API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Ann%20Arbor&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      { credentials: "same-origin" }
    )
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          weather_id: data.weather[0].id,
        });
        this.handleWeatherChange();
      })
      .catch((error) => console.log(error)); // eslint-disable-line no-console
  }

  handleWeatherChange() {
    let weather_id = Math.floor(this.state.weather_id / 100);
    switch (weather_id) {
      case 2:
        this.setState({
          weather_description: "currently stormy ⛈",
        });
        break;
      case 3:
        this.setState({
          weather_description: "currently rainy 🌧",
        });
        break;
      case 5:
        this.setState({
          weather_description: "currently rainy 🌧",
        });
        break;
      case 6:
        this.setState({
          weather_description: "currently snowy 🌨",
        });
        break;
      case 7:
        this.setState({
          weather_description: "currently cloudy ☁️",
        });
        break;
      case 8:
        if (this.state.weather_id === 800) {
          this.setState({
            weather_description: "currently clear ☀️",
          });
        } else if (this.state.weather_id < 803) {
          this.setState({
            weather_description: "currently clear 🌤",
          });
        } else {
          this.setState({
            weather_description: "currently cloudy ☁️",
          });
        }
        break;
      default:
        this.setState({
          weather_description: "",
        });
    }
  }

  render() {
    return (
      <div id="Welcome">
        <Wrapper className="Welcome" background_color="#D6EAF8">
          <ParagraphContainer>
            <Title id="title" color="#212F3C">
              <b>Hey. I'm Scott!</b>
            </Title>
            <Intro color="212F3C">
              I'm a <b>software engineer</b> at Facebook living in the{" "}
              <b>{this.state.weather_description}</b> city of Seattle. I have a
              Computer Science B.S.E. from the University of Michigan.
            </Intro>

            <Portrait src={currentPic} />

            <br></br>
            <br></br>

            <LogoLink
              href="https://www.linkedin.com/in/scott-beinlich/"
              target="_blank"
            >
              <img src={linkedLogo} alt="My LinkedIn" />
            </LogoLink>

            <LogoLink href="https://github.com/sbeinlich" target="_blank">
              <img src={gitLogo} alt="My Github" />
            </LogoLink>

            <br></br>
            <br></br>

            <ButtonLink
              href="https://drive.google.com/open?id=1cMgKAq8gncrBSowWbtUUHj9W0tEd4wpF"
              target="_blank"
            >
              <RoundedButton type="submit" color="#212F3C">
                Resume
              </RoundedButton>
            </ButtonLink>
          </ParagraphContainer>
        </Wrapper>
      </div>
    );
  }
}

export default Welcome;
