import styled from "styled-components";

const EndPointContainer = styled.div`
    & > div {
        display: inline-block;
        padding: 1.6rem 3.2rem;
    }
`

const Base = styled.div`
    background-color: #00A86B;
    border-radius: 30px 0 0 30px;
`

const EndPoint = styled.div`
    background-color: #EDEDED;
    color: #333333;

    border-radius: 0 30px 30px 0;
`

export default EndPointContainer;
export {Base, EndPoint};