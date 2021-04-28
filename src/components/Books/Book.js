import React, {useState} from 'react'
import { useMotionValue, useTransform } from "framer-motion";
import {
    CardWrapper,
    CardContainer,
    TopContainer,
    MainText,
    ImageWrapper,
    ImageInner,
    BottomContainer,
    TitleText,
    AuthorText} from './Book.elements'
    
function Book({Author, Title, Image}) {
    // we want to rotate the card on x and y axis, 0 is an initial value
    const x = useMotionValue(0);
    const y = useMotionValue(0)
    //inverting x and y axis:
    const rotateX = useTransform(x, [-100, 100], [30, -30])
    const rotateY = useTransform(x, [-100, 100], [-30, 30])

    const [isShown, setIsShown] = useState(false);
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
                    <ImageWrapper
                        
                    >
                        <ImageInner 
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}>
                            <img src={Image} alt={Title}/>
                        </ImageInner>
                    </ImageWrapper>

                    {!isShown && (
                    <MainText>Drag me!</MainText>
                    )}
                </TopContainer>
                    {!isShown && (
                <BottomContainer>
                    <TitleText>{Title}</TitleText>
                    <AuthorText> by {Author}</AuthorText>
                </BottomContainer>
                )}

            </CardContainer>
        </ CardWrapper>
    )
}

export default Book
