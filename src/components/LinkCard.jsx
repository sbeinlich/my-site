import styled from 'styled-components';

const LinkCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: ${props => props.background_color};
    font-weight: 500;
    font-size: 1.25em;
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: space-between;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;


export default LinkCard;
