import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <div>
      <div className="support-square" style={{ width: '100%', height: '100vh', backgroundImage: "url('/assets/spacebackground.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="title" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div className="support-square" style={{ width: '500px', height: '450px', backgroundImage: "url('/assets/spaceman.png')", position: 'relative' }}></div>
            <div style={{ width: '550px', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
              <h1 style={{ color: 'white', fontSize: '100px' }}>Explore Our Stars</h1>
            </div>
          </div>
          <div className="searchbar" style={{ width: '800px', textAlign: 'center' }}>
            <input style={{ height: "60px", borderRadius: '40px' }}
              type="text"
              name="star"
              className="form-control"
              placeholder="Enter a star constellation..."
            />
            <div style={{ paddingTop: '20px' }}>
              <button style={{ width: "250px", height: "60px", fontSize: '30px', borderRadius: '40px', backgroundColor: 'rgb(0, 12, 47' }} className="btn btn-sm btn-dark" id="submit" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
