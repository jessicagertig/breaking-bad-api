import Head from "next/head";
import MainBG from "@/components/MainBG";
import MainHeader, { SecondaryHeader, HeaderContainer } from "@/components/Header";
import { Button, ButtonGroup } from "@/components/Buttons";
import EndPointContainer, { Base, EndPoint } from "@/components/EndPoint";
import FetchAPI from "@/components/FetchAPI";
import { useAppSelector } from '@/lib/redux/hooks';
import { selectScreenWidth } from '@/lib/redux/reducers/screenSize';

// This is the component for the "/" route
export default function Home(): JSX.Element {
    const { width, isSmallScreen } = useAppSelector(selectScreenWidth);
    //Access the width and isSmallScreen properties of the screen size state
    //the width is a number and isSmallScreen is a boolean
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
                <p className="gilliverse">Including <em>Better Call Saul</em> and <em>El Camino</em>!</p>
                <ButtonGroup>
                    <Button>Characters</Button>
                    <Button>Episodes</Button>
                    <Button>Quotes</Button>
                    <Button>Deaths</Button>
                </ButtonGroup>
                <EndPointContainer>
                    <Base>Base URL</Base>
                    <EndPoint>characters/random</EndPoint>
                </EndPointContainer>

                <FetchAPI>
                    Fetch Random Character
                </FetchAPI>
            </MainBG>
        </>
    )
}