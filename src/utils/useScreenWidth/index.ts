import { useState, useEffect } from 'react';

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenWidth;
};

export default useScreenWidth;
