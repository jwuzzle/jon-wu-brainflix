import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainVideoPage />} />
          <Route path='/videos' element={<MainVideoPage />} />
          <Route path='/videos/:videoId' element={<MainVideoPage />} />
          <Route path='*' element={<div>404 Not Found!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
