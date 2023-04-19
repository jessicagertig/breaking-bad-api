import styled from "styled-components";


// MainBG containing that is the first thing user sees when visiting site.
// It is 100vh and contains the breaking bad background image
const MainBG = styled.section`
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./breaking_bad_bg.jpeg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #CCCCCC;
`
export default MainBG;