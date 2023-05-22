import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import axios from 'axios';

export default function Home() {
  const [responseData, setResponseData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    let starname = event.target.star.value;

    try {
      const response = await axios.request({
        method: 'GET',
        url: 'https://stars-by-api-ninjas.p.rapidapi.com/v1/stars',
        params: { name: starname },
        headers: {
          'X-RapidAPI-Key': 'b6486a2244msh6b26351dc2d4ef3p1a6430jsna5b9d93cf69c',
          'X-RapidAPI-Host': 'stars-by-api-ninjas.p.rapidapi.com'
        }
      });
      
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
}
