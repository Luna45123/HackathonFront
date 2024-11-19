import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';




let mood = '';
let title = '';
let text = '';
let emotion = '';
let zone = '';
let userId = sessionStorage.getItem("user");

const Theam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh; /* Full height */
  width: 100%; /* Full width */
  background-color: ${(props) =>
    props.mood === 'sadness' ? '#e3f8ff' : props.mood === 'joy' ? '#f9ffe0' : '#ffffff'};
  padding: 0;
  margin: 0;
`;

const FullScreenContainer = (props) => <Theam {...props} />;

const GridContainer = styled.div`
  text-align: center;
  margin-top: -5%;

  h2 {
    font-size: 2rem;
    color: #333;
  }

  h4 {
    color: #555;
    margin-bottom: 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .card {
    background-color: #c7f0e7;
    padding: 1.5rem;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .card:hover {
    background-color: #aee5db;
  }
`;

const EmotionGrid = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setdata = () => {
    mood = location.state?.mood || ''; // Access passed state or set default value
    title = location.state?.title || '';
    text = location.state?.text || '';
    console.log(mood + " Title: " + title + " Text: " + text);
  };
  setdata();
  switch(mood) {
    case 'sadness':
      emotion = [
        'เสียใจ',
        'สิ้นหวัง',
        'เหงา',
        'รู้สึกผิด',
        'ซึมเศร้า',
        'น้อยใจ',
        'เบื่อชา',
        'อ่อนล้า',
        'เบื่อ',
        'หดหู่',
      ];
      zone = 'Blue Zone'
      break;
    case 'joy':
      emotion = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
      ];
      zone = 'Yellow Zone'
      break;
    default:
      emotion = [
        'No content'
      ];
  }


  const handleEmotionClick = (emotion) => {
    const handleSubmit = async () => {

      try {
          const response = await axios.post('http://localhost:8080/addDiary', { title: title, text:text, mood:emotion, moodZone: zone, userId:userId });
          
          console(response);
          
      } catch (error) {
          console.error('Error fetching mood analysis', error);
      }
  };
    handleSubmit();
    navigate(`/encourage`, { state: { mood: mood, title: title, text: text, zone: zone, emotion:emotion } });
  };

  return (
    <>
      <FullScreenContainer mood={mood}>
        <Header />
        <GridContainer>
          <h2>อารมณ์ของคุณอยู่ใน { zone }</h2>
          <h4><br />คำอธิบาย อารมณ์........................................................... <br /><br />โปรดเลือก อารมณ์ของคุณ</h4>
          <div className="grid">
            {emotion.map((emotion, index) => (
              <div className="card" key={index} onClick={() => handleEmotionClick(emotion)}>
                {emotion}
              </div>
            ))}
          </div>
        </GridContainer>
        <Footer />
      </FullScreenContainer>
    </>
  );
};

export default EmotionGrid;
