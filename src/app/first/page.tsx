'use client'

import React, { useState, useEffect } from 'react';

const IndexPage: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    //const [displayedSubText, setDisplayedSubText] = useState('');
    const fullText = `System.out.println('Hello World!');`;
    //const subText = 'Welcome to my portfolio.';

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
        if (index < fullText.length) {
            setDisplayedText(fullText.slice(0, index + 1));
            index++;
        } else {
            clearInterval(typingInterval);
        }
        }, 100);

        return () => clearInterval(typingInterval);
    }, [fullText]);

    // useEffect(() => {
    //     let index = 0;

    //     const typingInterval = setInterval(() => {
    //         if (index < subText.length) {
    //             setDisplayedSubText(subText.slice(0, index + 1));
    //             index++
    //         }
    //         else {
    //             clearInterval(typingInterval);
    //         }
    //     }, 150)
        
    //     return () => clearInterval(typingInterval);
    // }, []);

  return (
    <div className="max-w-7xl mx-auto w-full flex items-center justify-center px-5 font-courier">
      <div className="flex-col text-center">
        <h1 className="text-5xl font-bold text-black bg-gray-100 p-6">{displayedText}</h1>
        {/* <p className="mt-4 text-lg text-black">{displayedSubText}</p> */}
      </div>
    </div>
  );
};

export default IndexPage;
