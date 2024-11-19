import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import axios from 'axios';

if(sessionStorage.getItem("user") == '' || sessionStorage.getItem("user") === null){
  window.location.replace("http://www.w3schools.com");
}

let mood = '';
let title = '';
let text = '';
let emotion = '';
let zone = '';
let userId = sessionStorage.getItem("user");

// Main container to make the app fit the screen
const FullScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh; /* Full height */
  width: 100%; /* Full width */
  background-color: #e3f2fd;
  padding: 0;
  margin: 0;
`;






// QuoteCard section
const QuoteBox = styled.div`
  background-color: #d5f5e7;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 90%;
  max-width: 600px;
`;

const QuoteText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Author = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`;

// Button styles
const StyledButton = styled.button`
  background-color: #b2f5ea;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #81e6d9;
  }
`;


function QuoteCard() {
  const location = useLocation();
  console.log(mood);
  const navigate = useNavigate(); // Hook to programmatically navigate
  const handleNext = () => {
    navigate('/dairymain'); // Navigate to the next page
  };
  console.log(emotion);

  const setdata = () => {
    mood = location.state?.mood || ''; // Access passed state or set default value
    title = location.state?.title || '';
    text = location.state?.text || '';
    emotion = location.state?.emotion || '';
    zone = location.state?.zone || '';

    console.log(mood + " Title: " + title + " Text: " + text + " emotion: " + emotion + " zone: " + zone);
  };

 

  setdata();
  return (
    <FullScreenContainer>
      {/* Header */}
      <Header />

      {/* Quote Card */}
      <QuoteBox>
        <h2>ขอบคุณสำหรับการเขียนไดอารี่</h2>
        <QuoteText>
          "ความเสียใจเป็นบทเรียนที่ล้ำค่า ที่ทำให้เราเติบโต"
        </QuoteText>
        <Author>เฮเลน เคเลอร์</Author>
        <StyledButton onClick={handleNext}>back</StyledButton>
      </QuoteBox>

      {/* Footer */}
      <Footer />
    </FullScreenContainer>
  );
}

export default QuoteCard;
