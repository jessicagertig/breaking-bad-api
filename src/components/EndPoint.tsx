import styled from "styled-components";

// this is the div below the buttons that shows the current 
// endpoint according to what button the user clicks.
const EndPointContainer = styled.div`
    & > div {
        display: inline-block;
        padding: 1.6rem 3.2rem;
        @media only screen and (max-width: 600px) {
            padding: 1.6rem 1rem;
        }
    }
`

// The "Base URL" part of that above described component
const Base = styled.div`
    background-color: #00A86B;
    border-radius: 30px 0 0 30px;
`

// The "Endpoint" part of that above described component
const EndPoint = styled.div`
    background-color: #EDEDED;
    color: #333333;

    border-radius: 0 30px 30px 0;
`

export default EndPointContainer;
export {Base, EndPoint};