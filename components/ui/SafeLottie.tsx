import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie
const Lottie = dynamic(() => import('react-lottie'), { 
  ssr: false,
  loading: () => <div style={{ height: 200, width: 400 }}></div>
});

interface SafeLottieProps {
  isVisible: boolean;
  options: any;
  height?: number;
  width?: number;
  isClickToPauseDisabled?: boolean;
  [key: string]: any;
}

// Create a wrapper component for Lottie that handles unmounting safely
const SafeLottie = ({ isVisible, ...props }: SafeLottieProps) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    return () => {
      setMounted(false);
    };
  }, []);
  
  if (!mounted || !isVisible) {
    return null;
  }
  
  // Add empty eventListeners to prevent the forEach error
  const options = {
    ...props.options,
    eventListeners: []
  };
  
  return <Lottie {...props} options={options} />;
};

export default SafeLottie; 