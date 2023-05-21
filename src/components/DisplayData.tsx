import styled from "styled-components";

const DisplayData = styled.section`
    text-align: center;
    padding: 5rem 20rem;

    @media only screen and (max-width: 1200px) {
        padding: 5rem 10rem;
    }

    @media only screen and (max-width: 1200px) {
        padding: 5rem 2rem;
    }

    & h1 {
        margin-bottom: 5rem;
    }

    & pre {
        text-align: left;
        background-color: #F1F1F1;
        padding: 3rem;
        border-radius: 15px;
        overflow-y: scroll;

        & span {
            color: #A87C11;
            font-weight: 800;
        }
    }
`

export default DisplayData;