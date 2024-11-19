import React, { useState } from 'react';
import axios from 'axios';


function MoodAnalysisForm() {
  const [text, setText] = useState('');
  const [moodData, setMoodData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/getMoodText2', { text });
      setMoodData(response.data);
    } catch (error) {
      console.error("Error fetching mood analysis", error);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  
  return (
    
    <div>
      <form onSubmit={handleSubmit} data-aos="fade">
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          required
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
  


      {moodData && (
        <div className="result">
          <h2>Mood Analysis Result</h2>
          <p><strong>Label:</strong> {moodData.mood_analysis[0].label}</p>
        </div>
      )}
    </div>
  );
}

export default MoodAnalysisForm;
