import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

export default function Results({ responseData }) {
    console.log(responseData)
  if (!responseData || responseData.length === 0) {
    return <div>No results found.</div>;
  }

  const star = responseData[0];
  return (
    <div>
      <div className="support-square" style={{ width: '100%', height: '100vh', backgroundImage: "url('/assets/resultsbackground.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="results" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{star.name}</h5>
              <p className="card-text">
                Constellation: {star.constellation}<br />
                Right Ascension: {star.right_ascension}<br />
                Declination: {star.declination}<br />
                Apparent Magnitude: {star.apparent_magnitude}
              </p>
              <div className="d-flex justify-content-between">
                <a href="#" className="btn btn-primary">
                  Save to Profile
                </a>
                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
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
