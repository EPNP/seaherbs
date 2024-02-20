import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [herbsData, setHerbsData] = useState([]);
  const navigate = useNavigate();
  

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/api/data')
      .then(response => response.json())
      .then(data => {
        setHerbsData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCardClick = (herbName, index) => {
    navigate(`/showdata/${index}`);
    console.log(`Herb ${herbName} clicked! ${index}`);
  };

  return (
    <div className="app-container">
      <div className="flex-container">
        <img
          src="./logoseaherbs.png"
          alt="Logo Sea Herbs"
          className="logo"
          style={{ width: "400px", height: "auto" }}
        />
        <div className="container">
          <div className="scrollable-container">
            <div className="search-container" style={{ textAlign: "center" }}>
              <input
                type="text"
                placeholder="SEARCH"
                className="input"
                style={{
                  background: "transparent",
                  border: "1px solid black",
                  borderRadius: "11px",
                  outline: "none",
                  width: "700px",
                  height: "50px",
                  fontWeight: "100",
                  fontSize: "24px",
                  transition: "0.8s",
                  padding: "20px",
                  marginTop: "50px",
                  marginBottom: "20px",
                  fontFamily: 'Prompt, sans-serif',
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "5px", 
                justifyContent: "center",
              }}
            ><p style={{
              fontWeight: "300",
              fontSize: "24px",
              fontFamily: 'Prompt, sans-serif',
            }}>Popular Search</p>

            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "5px", 
                justifyContent: "center",
                padding: "20px",
              }}
            >
              {herbsData.map((herb, index) => (
                <Card
                  key={index}
                  id={index} // Replace id with the index of the data
                  photo={`https://images.unsplash.com/photo-1561407958-54aa9fa49a21?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  text={herb["ชื่อสมุนไพร "]} // Replace text with the value of "ชื่อสมุนไพร"
                  onClick={() => handleCardClick(herb["ชื่อสมุนไพร "], index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
