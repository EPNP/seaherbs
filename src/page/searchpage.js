import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [herbsData, setHerbsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost:3005/api/data')
      .then(response => response.json())
      .then(data => {
        setHerbsData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleCardClick = (herbId) => {
    navigate(`/showdata/${herbId}`);
    console.log(`Herb ${herbId} clicked!`);
  };
  

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the herbs based on the search query
  const filteredHerbs = herbsData.filter(herb => {
    return herb["ชื่อสมุนไพร"].toLowerCase().includes(searchQuery.toLowerCase()) ;
  });

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
                value={searchQuery}
                onChange={handleSearchInputChange}
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
            >
              <p style={{
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
              {filteredHerbs.map((herb, index) => (
                <Card
                  key={index}
                  id={index} 
                  photo={herb["ลิ้งรูปภาพ"]}
                  text={herb["ชื่อสมุนไพร"]} 
                  onClick={() => handleCardClick(herb["id"])}
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
