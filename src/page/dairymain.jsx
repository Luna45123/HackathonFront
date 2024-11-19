import React from "react";
import "./css/Dairymain.css"; // Move the CSS to an external file, App.css, or use inline styles.
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';



const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <MainContent />

      {/* Footer */}
      <Footer />
    </div>
  );
};



const MainContent = () => {
  
  sessionStorage.setItem("user", 1001);


  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleNext = () => {
    navigate('/dairy'); // Navigate to the next page
  };
  return (

    <main className="main-content">
      <div className="tiles-container">
        <div className="tile plus" onClick={handleNext}>
          <span>+</span>
        </div>
        <div className="tile">
          <span className="line"></span>
        </div>
      </div>
      <div className="title">Title</div>
    </main>
  );
};



export default App;
