import { HTMLAttributes } from "react";
import styled from "styled-components";

// This is the div component the contains the characters,
// episodes, quotes, and death buttons.
const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(10rem, 1fr));
    column-gap: 3.2rem;
    width: 50%;
    margin: 4.8rem auto; 
    fontSize: 1.4rem;

    @media only screen and (max-width: 1200px) {
        width: 60%;
        grid-template-columns: repeat(2, minmax(min-content, 1fr));
        row-gap: 2rem;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
        grid-template-columns: repeat(2, minmax(min-content, 1fr));
        row-gap: 2rem;
        margin: 2.4rem auto;
    }
`

// accept an isActive prop to edit the background color
interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean;
}


// This are the buttons that are used for the characters,
// episodes, quotes, and deaths endpoints in the home page.
const Button = styled.a<ButtonProps>`
    &,
    &:link,
    &:visited {
        font-size: 2rem;
        background-color: ${props => props.isActive ? '#005A36': '#00A86B'};
        text-align: center;
        padding: 1.6rem 0; 
        border-radius: 15px;
        cursor: pointer;
        transition: all 0.2s ease;

        @media only screen and (max-width: 600px) {
            padding: 1.2rem 0;
        }
    }

    &:hover {
        background-color: ${props => props.isActive ? '#005A36': '#007A4D'};
    }
`

export {ButtonGroup, Button}