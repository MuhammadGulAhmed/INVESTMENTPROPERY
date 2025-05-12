import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Textoverlap from './components/Textoverlap';

function Welcome() {
  const navigate = useNavigate();

  const textoverlay = [
    {
      id: 1,
      heading: 'Properties',
      paragraph1: 'LATEST LISTINGS',
      paragraph2: 'Featured Property',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Effect running...');
      navigate('/Login');
    }, 2000); // 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className="bg-[#F1F4FF] fixed inset-0 flex items-center px-10 justify-center overflow-hidden">
      <Textoverlap textoverlay={textoverlay} />
    </div>
  );
}

export default Welcome;
