import {BrowserRouter, Route, Routes, } from "react-router-dom";

import CreateRoom from './components/CreateRoom';
import Room from './components/Rooms';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateRoom />}></Route>
          <Route path="/room/:roomID" element={<Room/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
} 

export default App
