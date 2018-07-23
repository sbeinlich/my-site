import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
    background: ${props => props.background};
    padding: .75em;
`;

const PageInfo = styled.p`
    color: #D6EAF8;
    float: center;
    font-size: .90em;
`

class Footer extends Component {
    render(){
        return(
            <div>
                <Wrapper className = "Footer">
                    <PageInfo>This site was created by me, Scott Beinlich, as an independent React project.</PageInfo>
                    <PageInfo>Please feel free to contact me with any suggestions, questions, comments, or inquiries!</PageInfo>
                </Wrapper>
            </div>
        );
    }
}

export default Footer;
