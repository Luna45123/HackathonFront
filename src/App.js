import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Test from "./page/dairymain";
import Ai from "./page/Ai";
import Dairy from "./page/dairy";
import EmotionGrid from "./page/EmotionGrid";
import TestTool from "./page/testTool";
import Encourage from "./page/Encourage";
import Testpop from "./page/Testpop";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={ <Ai/> } />
          <Route path="/dairymain" element={<Test />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/emotionGrid" element={<EmotionGrid />} />
          <Route path="/encourage" element={<Encourage />} />
          <Route path="/popup" element={<Testpop />} />
          {/* <Route path="/testTool" element={<TestTool />} /> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;