import styled from "styled-components";

const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(16rem, 1fr));
    column-gap: 3.2rem;
    width: 50%;
`

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