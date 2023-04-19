import Head from "next/head";
import MainBG from "@/components/MainBG";
import MainHeader, { SecondaryHeader, HeaderContainer } from "@/components/Header";
import { Button, ButtonGroup } from "@/components/Buttons";
import EndPointContainer, { Base, EndPoint } from "@/components/EndPoint";
import FetchAPI from "@/components/FetchAPI";


// This is the component for the "/" route
export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>Breaking Bad API | Home</title>
            </Head>
            <MainBG>
                <HeaderContainer>
                    <SecondaryHeader>
                        <span>Th</span>e <span>Un</span>official 
                    </SecondaryHeader>
                    <MainHeader>
                        <span>Br</span>eaking <span>Ba</span>d 
                    </MainHeader>
                    <SecondaryHeader>
                        API 
                    </SecondaryHeader>
                </HeaderContainer>
                <p style={{marginTop: "4.8rem", fontSize: "1.6rem"}}>Including <em>Better Call Saul</em> and <em>El Camino</em>!</p>
                <ButtonGroup style={{margin: "5.6rem auto"}}>
                    <Button>Characters</Button>
                    <Button>Episodes</Button>
                    <Button>Quotes</Button>
                    <Button>Deaths</Button>
                </ButtonGroup>
                <EndPointContainer>
                    <Base>Base URL</Base>
                    <EndPoint>characters/random</EndPoint>
                </EndPointContainer>

                <FetchAPI style={{marginTop: "7.2rem"}}>
                    Fetch Random Character
                </FetchAPI>
            </MainBG>
        </>
    )
}