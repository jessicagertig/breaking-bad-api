import Head from "next/head";
import MainBG from "@/components/MainBG";
import MainHeader, { SecondaryHeader, HeaderContainer } from "@/components/Header";
import { Button, ButtonGroup } from "@/components/Buttons";
import EndPointContainer, { Base, EndPoint } from "@/components/EndPoint";
import FetchAPI from "@/components/FetchAPI";
import { useState, useRef } from "react";

import Character from '@/components/Character';
import Episode from '@/components/Episode';
import { RefetchHandle } from '@/types';

// This is the component for the "/" route
export default function Home(): JSX.Element {

    const [endPoint, setEndPoint] = useState("characters")
    const [show, setShow] = useState(false);
    
    const childComponentRef = useRef<RefetchHandle>(null);

    const handleOnClick = () => {
      childComponentRef.current?.refetchQuery()
      setShow(true);
    }

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
                    <Button onClick={() => setEndPoint('characters')} isActive={endPoint === 'characters'}>Characters</Button>
                    <Button onClick={() => setEndPoint('episodes')} isActive={endPoint === 'episodes'}>Episodes</Button>
                    <Button onClick={() => setEndPoint('quotes')} isActive={endPoint === 'quotes'}>Quotes</Button>
                    <Button onClick={() => setEndPoint('deaths')} isActive={endPoint === 'deaths'}>Deaths</Button>
                </ButtonGroup>
                <EndPointContainer>
                    <Base>Base URL</Base>
                    <EndPoint>{endPoint}/random</EndPoint>
                </EndPointContainer>

                <FetchAPI onClick={handleOnClick}>
                    Fetch Random {endPoint[0].toUpperCase() + endPoint.slice(1, endPoint.length -1)}
                </FetchAPI>
                { endPoint === 'characters' && show && <Character ref={childComponentRef} /> } 
                { endPoint === 'episodes' && show && <Episode ref={childComponentRef} /> }
            </MainBG>
        </>
    )
}