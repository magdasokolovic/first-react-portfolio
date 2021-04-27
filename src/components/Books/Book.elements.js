import styled from 'styled-components';
import {motion} from "framer-motion";

// $red: #e20001;
// $black: #191919;
export const CardWrapper = styled.div`
    width: 100%;
    //use perspective for 3D effect:
    perspective: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
`
//motion for dragging the card:
export const CardContainer = styled(motion.div)`
    width: 260px;
    height: 450px;
    padding-bottom: .7em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: #191919;
    color: white;
    position: relative;
    cursor: grab;
    overflow: hidden;

`
export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    padding: .8em 10px;
`


export const MainText = styled.h1`
    color: white;
    text-transform: uppercase;
    margin: 0 2px;
    font-size: 46px;
    /* z-index: 10; */
    font-weight: 800;
    overflow: hidden;
`

export const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
//motion animation:
export const ImageInner = styled(motion.div)`
    width: auto;
    height: 190px;
    margin-right: 2em;
    margin-top: 2em;
    user-select: none;
    margin: 0 auto;

    img { 
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 50%;
        user-select: none;
        opacity: .5; 
        transition: all .5s ease-in-out;

        &:hover {
            opacity: 1;
            border-radius: 5px;
            width: 260px;
            height: 450px;
        }
    }
`
// Bottom Text: 
export const BottomContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    flex: 0.8;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const TitleText = styled.span`
    margin-right: .5em;
    font-size: .7rem;
    color: white;
    font-weight: 500;
    font-style: italic;
    &:hover {
        color: #e20001;
    }
`
export const AuthorText = styled.span`
    font-size: .5rem;
    color: white;
    font-weight: 700;
    &:hover {
        color: #e20001;
    }
`