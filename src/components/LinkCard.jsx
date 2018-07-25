import styled from 'styled-components';

const LinkCard = styled.button`
    transition: 0.3s;
    background-color: ${props => props.background_color};
    font-weight: 500;
    font-size: 1.25em;
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: space-between;
    border-color: ${props => props.border_color};
    border-radius: 20px;
    outline: none;



    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
    }
`;


export default LinkCard;
