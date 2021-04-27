import React from "react";
import Lottie from 'react-lottie';
import animationData from './lotties/inProgress.json';


export default function Projects() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    return (
      <div className='container'>
        <div className='wrapper'>
          <p>
            my projects:
          </p>
          <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
            />
        </div>
      </div>
    );
  }