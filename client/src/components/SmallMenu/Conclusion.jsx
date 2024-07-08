import React, { useEffect, useState } from 'react';
import '../../index.css';
import fireflyImage from '../../images/firefly.png';
import forestImage from '../../images/forest2.png';
import logoImg from '../../images/logo.png';

const Firefly = ({ text }) => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [glow, setGlow] = useState(false);
  const [direction, setDirection] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const moveFirefly = () => {
      setPosition(prev => {
        let newTop = prev.top + direction.top;
        let newLeft = prev.left + direction.left;

        if (newTop < 0) newTop = 0;
        if (newTop > 100) newTop = 100;
        if (newLeft < 0) newLeft = 0;
        if (newLeft > 100) newLeft = 100;

        return { top: newTop, left: newLeft };
      });
    };

    const changeDirection = () => {
      const newTop = (Math.random() - 0.5) * 2; 
      const newLeft = (Math.random() - 0.5) * 2; 
      setDirection({ top: newTop, left: newLeft });
    };

    const glowFirefly = () => {
      setGlow(true);
      setTimeout(() => setGlow(false), 500);
    };

    const moveInterval = setInterval(moveFirefly, 500);
    const directionInterval = setInterval(changeDirection, 2000);
    const glowInterval = setInterval(glowFirefly, 1000 + Math.random() * 1000);

    return () => {
      clearInterval(moveInterval);
      clearInterval(directionInterval);
      clearInterval(glowInterval);
    };
  }, [direction]);

  return (
    <div
      className={`firefly ${glow ? 'glow' : ''}`}
      style={{
        top: `${position.top}%`,
        left: `${position.left}%`,
        position: 'absolute',
        width: '20px', 
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        textShadow: '0 0 5px rgba(0, 0, 0, 0.5)'
      }}
    >
      {text ? text : <img src={fireflyImage} alt="Firefly" style={{ width: '100%', height: '100%' }} />}
    </div>
  );
};

const Conclusion = () => {
  const words = ['Novel', 'self Development', 'Humanities', 'Economic&Management', 'History&Culture'];

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${forestImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
    >
      {Array.from({ length: 35 }).map((_, index) => ( 
        <Firefly key={index} />
      ))}
      {words.map((word, index) => (
        <Firefly key={`word-${index}`} text={word} />
      ))}
      <div className="footer" style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <img src={logoImg} alt='site logo' style={{ width: '40px', marginRight: '10px' }} />
        <div style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', textShadow: '0 0 5px rgba(0, 0, 0, 0.5)' }}>
          Future - The future is unclear, but the research results so far show that novels and self-development books will continue to gain popularity in the future.
        </div>
      </div>
    </div>
  );
};

export default Conclusion;














