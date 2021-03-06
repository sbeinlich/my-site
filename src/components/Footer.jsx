import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  background: ${(props) => props.background};
  padding: 0.75em;
`;

const PageInfo = styled.p`
  color: #d6eaf8;
  float: center;
  font-size: 0.9em;
`;

class Footer extends Component {
  render() {
    return (
      <div>
        <Wrapper className="Footer" background="#212F3C">
          <PageInfo>
            This site was created by me, Scott Beinlich, as an independent React
            project.
          </PageInfo>
          <PageInfo>
            Please feel free to contact me at sbein@umich.edu or on Linkedin.
          </PageInfo>
        </Wrapper>
      </div>
    );
  }
}

export default Footer;
