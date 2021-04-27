import React from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from 'styled-components';

// $red: #e20001;
// $black: #191919;
const CardWrapper = styled.div`
    width: 100%;
    //use perspective for 3D effect:
    perspective: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
`
//motion for dragging the card:
const CardContainer = styled(motion.div)`
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
const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    padding: .8em 10px;
`


const MainText = styled.h1`
    color: white;
    text-transform: uppercase;
    margin: 0 2px;
    font-size: 46px;
    /* z-index: 10; */
    font-weight: 800;
    overflow: hidden;
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
//motion animation:
const ImageInner = styled(motion.div)`
    width: auto;
    height: 190px;
    margin-right: 2em;
    margin-top: 2em;
    user-select: none;
    margin: 0 auto;
    z: 10000;


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
const BottomContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    flex: 0.8;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const TitleText = styled.span`
    margin-right: .5em;
    font-size: .7rem;
    color: white;
    font-weight: 500;
    font-style: italic;
    &:hover {
        color: #e20001;
    }
`
const AuthorText = styled.span`
    font-size: .5rem;
    color: white;
    font-weight: 700;
    &:hover {
        color: #e20001;
    }
`

    

function Book({Author, Title, Image}) {
    // we want to rotate the card on x and y, 0 is an initial value
    const x = useMotionValue(0);
    const y = useMotionValue(0)
    //inverting x and y axix
    const rotateX = useTransform(x, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [-30, 30])

    return (
        < CardWrapper>
        {/*  z determines how much the card will pop out from the background */}
        {/* 'drag' enables dragging  */}
            <CardContainer 
                style={{x, y, rotateX, rotateY, z: 100}} 
                drag 
                dragElastic={0.16} 
                dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
                whileTap={{cursor: 'grabbing'}}>
                <TopContainer>
                    <ImageWrapper>
                        <ImageInner 
                            style={{x, y, rotateX, rotateY, z: 100000}}
                            drag
                            dragElastic={0.12}
                            whileTap={{cursor: 'grabbing'}}
                        >
                            <img src={Image} alt={Title}/>
                        </ImageInner>
                    </ImageWrapper>
                    <MainText>Drag me!</MainText>
                </TopContainer>

                <BottomContainer>
                    <TitleText>{Title}</TitleText>
                    <AuthorText> by {Author}</AuthorText>
                </BottomContainer>

            </CardContainer>
        </ CardWrapper>
    )
}

export default Book
