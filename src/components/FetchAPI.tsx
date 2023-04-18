import styled from "styled-components";

const FetchAPI = styled.a`
    &,
    &:link,
    &:visited {
        font-size: 3.2rem;
        color: #00A86B;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    &:hover {
        color: #007A4D;
    }

    &:active {
        color: #005A36;
    }
`

export default FetchAPI