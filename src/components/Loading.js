import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lotties/kiss-of-the-heart.json';

const Loading = ({loading}) => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div style={{height: '100vh', backgroundColor: '#191919', display: 'grid', placeContent: 'center'}}>
            <div className='container'>
                <div className='wrapper'>
                    <Lottie 
                        options={defaultOptions}
                        height={400}
                        width={400}
                        loading={loading}
                    />
                </div>
            </div>
        </div>

    )
}

export default Loading
