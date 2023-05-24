import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

export default function Results({ responseData }) {
    console.log(responseData);

  return (
    <div>
      <div className="support-square" style={{ width: '100%', height: '100vh', backgroundImage: "url('/assets/resultsbackground.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="results" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-primary">Button 1</a>
                <a href="#" className="btn btn-primary">Button 2</a>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <FaArrowDown size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
