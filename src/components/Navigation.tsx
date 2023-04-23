import styled from "styled-components";
import Link from 'next/link';
import { selectScreenWidth } from "@/lib/redux/reducers/screenSize";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// The nav bar
const NavBar = styled.nav`
    height: 10vh;
    min-height: 10vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #CCC;

    & svg {
        cursor: pointer;
        font-size: 3rem;
        transition: color 0.2s ease;
        &:hover {
            color: #007A4D;
        }

        &:active {
            color: #005A36;
        }
    }
`

// The "Breaking Bad API" nav brand
const NavBrand = styled.h2`
    letter-spacing: 0;
    font-size: 3.2rem;
    font-family: 'Anton', 'sans-serif';
    
    & a span {
        color: #00A86B;
    }

    & a {
        transition: all 0.2s ease;
    }

    & a:hover, & a:hover span {
        color: #007A4D;
    }

    & a:active, & a:active span {
        color: #005A36;
    }
`

// The unordered list containing the nav menu
const NavList = styled.ul`
    min-width: 50%;
    width: 60%;
    max-width: 80%;
    list-style: none;
    display: flex;
    justify-content: space-between;

    & li a {
        font-size: 1.8rem;
        transition: all 0.2s ease;
        &:hover {
            color: #007A4D;
        }

        &:active {
            color: #005A36;
        }
    }
`

// The nav component
export default function Nav(): JSX.Element {
    const { isSmallScreen } = useSelector(selectScreenWidth);
    return (
        <>
            <NavBar>
                <NavBrand>
                    <Link href="/">
                        <span>Br</span>eaking <span>Ba</span>d API
                    </Link>
                </NavBrand>
                {
                isSmallScreen 
                ?
                <FontAwesomeIcon icon={faBars} />
                :
                <NavList>
                    <li>
                        <Link href="/categories">
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link href="/episodes">
                            Episodes
                        </Link>
                    </li>
                    <li>
                        <Link href="/quotes">
                            Quotes
                        </Link>
                    </li>
                    <li>
                        <Link href="/deaths">
                            Deaths
                        </Link>
                    </li>
                    <li>
                        <Link href="/docs">
                            Docs
                        </Link>
                    </li>
                </NavList>
                }
            </NavBar>
        </>
    )
}
