import styled from "styled-components";

// this is the div below the buttons that shows the current 
// endpoint according to what button the user clicks.
const EndPointContainer = styled.div`

    @media only screen and (max-width: 1200px) {
        width: 60%;
        text-align: center;
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        width: 90%;
        font-size: 1.6rem;
    }
    & > div {
        display: inline-block;
        padding: 1.6rem 3.2rem;
        @media only screen and (max-width: 1200px) {
            padding: 2rem 0;
            text-align: center;
        }
        @media only screen and (max-width: 600px) {
            padding: 1.6rem 0;
            text-align: center;
        }

    }
`

// The "Base URL" part of that above described component
const Base = styled.div`
    background-color: #00A86B;
    border-radius: 30px 0 0 30px;

    @media only screen and (max-width: 1200px) {
        width: 35%;
    }
`

// The "Endpoint" part of that above described component
const EndPoint = styled.div`
    background-color: #EDEDED;
    color: #333333;
    border-radius: 0 30px 30px 0;

    @media only screen and (max-width: 1200px) {
        width: 63%;
    }
`

export default EndPointContainer;
export {Base, EndPoint};