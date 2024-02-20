import React from "react";
import Card from "../components/Card";

const SearchPage = () => {
  const cardsData = [
    { id: 1, photo: "https://images.unsplash.com/photo-1561407958-54aa9fa49a21?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Card 1" },
    { id: 2, photo: "https://images.unsplash.com/photo-1615484478243-c94e896edbae?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Card 2" },
    { id: 3, photo: "https://images.unsplash.com/photo-1702834137742-5d26220954ad?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Card 3" },
    { id: 4, photo: "https://images.unsplash.com/photo-1570295835271-04c05b4ed943?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Card 4" },
  ];

  const handleCardClick = (cardNumber) => {
    console.log(`Card ${cardNumber} clicked!`);
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
              {cardsData.map((card) => (
                <Card
                  key={card.id}
                  photo={card.photo}
                  text={card.text}
                  onClick={() => handleCardClick(card.id)}
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
