'use client'

import React, { useState, useEffect } from 'react';

const IndexPage: React.FC = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = `System.out.println('Hello World!');`;

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

  return (
    <div className="max-w-7xl mx-auto w-full flex items-center justify-center px-5">
      <div className="flex-col text-center">
        <h1 className="sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-black bg-gray-100 p-6">{displayedText}</h1>
      </div>
    </div>
  );
};

export default IndexPage;
