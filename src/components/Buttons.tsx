import styled from "styled-components";

// This is the div component the contains the characters,
// episodes, quotes, and death buttons.
const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(16rem, 1fr));
    column-gap: 3.2rem;
    width: 50%;
`

// This are the buttons that are used for the characters,
// episodes, quotes, and deaths endpoints in the home page.
const Button = styled.a`
    &,
    &:link,
    &:visited {
        font-size: 2rem;
        background-color: #00A86B;
        text-align: center;
        padding: 1.6rem 0; 
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    &:hover {
        background-color: #007A4D;
    }
`

export {ButtonGroup, Button}