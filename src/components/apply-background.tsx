
"use client";

import { useEffect } from 'react';

interface ApplyBackgroundProps {
  pageType: 'main' | 'other';
}

const ApplyBackground: React.FC<ApplyBackgroundProps> = ({ pageType }) => {
  useEffect(() => {
    const body = document.body;
    if (pageType === 'main') {
      body.classList.add('bg-main-page');
      body.classList.remove('bg-other-pages');
    } else {
      body.classList.add('bg-other-pages');
      body.classList.remove('bg-main-page');
    }

    // Optional: More robust cleanup if needed
    // return () => {
    //   body.classList.remove('bg-main-page', 'bg-other-pages');
    // };
  }, [pageType]);

  return null; // This component does not render anything itself
};

export default ApplyBackground;
