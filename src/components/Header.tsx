import styled from "styled-components";

// h1 tag containing the "Breaking Bad" text
const MainHeader = styled.h1`
    & span {
        color: #00A86B;
    }
`

// h2 tag containg the "The Unofficial" and "API" text
const SecondaryHeader = styled.h2`
    & span {
        color: #00A86B;
    }
`

// Div containing the 2 headers listed above
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