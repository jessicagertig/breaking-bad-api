import styled from "styled-components";

// This is the "Fetch Random Character/Episode/Quote/Death"
// link at the bottom of the landing page.
const FetchAPI = styled.a`
    &,
    &:link,
    &:visited {
        position: absolute;
        bottom: 10vh;
        font-size: 3.2rem;
        color: #00A86B;
        cursor: pointer;
        transition: all 0.2s ease;

        @media only screen and (max-width: 600px) {
            margin-top: 4rem;
            font-size: 2.4rem;
        }
    }

    &:hover {
        color: #007A4D;
    }

    &:active {
        color: #005A36;
    }
`

export default FetchAPI