import React from 'react'
// import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from 'styled-components';

// $red: #e20001;
// $black: #191919;
const CardWrapper = styled.div`
    width: 100%;
    perspective: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
`
//motion:
const CardContainer = styled.div`
    width: 250px;
    height: 400px;
    padding-bottom: .7em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    border-radius: 25px;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    background-color: #191919;
    color: white;
    position: relative;
    cursor: grab;

`
const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1.2;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    padding: .8em 10px;
`


const MainText = styled.h1`
    color: white;
    text-transform: uppercase;
    margin: 0;
    font-size: 40px;
    z-index: 10;
    font-weight: 900;
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
//motion:
const ImageInner = styled.div`
    width: auto;
    height: 180px;
    z-index: 99;
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
            border-radius: 0;
            height: 250px;
        }
    }
`
// Bottom Text: 
const BottomContainer = styled.div`
    width: 100%;
    /* flex: 0.8; */
    padding: 0 .8em;
    display: flex;
    flex-direction: column;
    
    
`
const TitleText = styled.span`
    margin-right: .5em;
    font-size: 1rem;
    color: white;
    font-weight: 800;
    &:hover {
        color: #e20001;
    }
`
const AuthorText = styled.span`
    font-size: .7rem;
    color: white;
    font-weight: 700;
    &:hover {
        color: #e20001;
    }
`
function Book({Author, Title, Image}) {
    
    return (
        < CardWrapper>
            <CardContainer>
                <TopContainer>
                    <ImageWrapper>
                        <ImageInner>
                            <img src={Image} alt={Title}/>
                        </ImageInner>
                    </ImageWrapper>
                    <MainText>Books</MainText>
                </TopContainer>

                <BottomContainer>
                    <TitleText>{Title}</TitleText>
                    <AuthorText>{Author}</AuthorText>
                </BottomContainer>
            </CardContainer>
        </ CardWrapper>
    )
}

export default Book
