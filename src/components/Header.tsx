import styled from "styled-components";

const MainHeader = styled.h1`
    & span {
        color: #00A86B;
    }
`

const SecondaryHeader = styled.h2`
    & span {
        color: #00A86B;
    }
`

const HeaderContainer = styled.div`
    text-align: center;
    letter-spacing: 8px;
    text-indent: 8px
    &:not(:last-child) {
        margin-bottom: 0.4rem;
    }
`

export default MainHeader;
export {SecondaryHeader, HeaderContainer};