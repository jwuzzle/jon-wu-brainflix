import { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainVideoPage />} />
          <Route path='/videos' element={<MainVideoPage />} />
          <Route path='/videos/:videoId' element={<MainVideoPage />} />
          <Route path='/upload' element={<VideoUploadPage />} />
          <Route path='*' element={<div>Sorry! Looks like the page you are looking for is lost in space.</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
