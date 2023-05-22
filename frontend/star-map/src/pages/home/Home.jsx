import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div>
      <div
        className="support-square"
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: "url('/assets/spacebackground.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          display: 'flex', // Added flexbox
          alignItems: 'center', // Vertically center the content
        }}
      >
        <div
          className="support-square"
          style={{
            width: '500px',
            height: '450px',
            backgroundImage: "url('/assets/spaceman.png')",
            position: 'relative', // Changed to relative
            flex: '0 0 40%', // Take up 50% of the parent container's width
          }}
        ></div>
        <div
          style={{color: 'white',
            flex: '0 0 40%', // Take up 50% of the parent container's width
          }}
        >
          <h1>Explore Our Stars</h1>
        </div>
      </div>
    </div>
  );
}
