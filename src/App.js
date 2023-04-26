import './App.css';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Data from './Components/Data/Data';
import Error from './Components/Error/Error';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment/:id" element={<Data />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path='/not-found' element={<Error />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
