import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Blogs } from "./Components/Blogs";
import { News } from "./Components/News"
import { Trends } from "./Components/Trends";

import "./App.css"

export default function App() {
  return(
    <div id="main" className="container-xs">

      <div id="heading" className="bg-warning">
      <br></br>
      <h1 className="text-white">Technical Blogging Website</h1>
      <br></br><br></br>
      </div>

      <div id="side-body">  
        <div id="side" className="bg-danger col-4">
          <>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Blogs />}></Route>
            <Route path="News" element={<News />}></Route>
            <Route path="Trends" element={<Trends />}></Route>
          </Routes>
          </BrowserRouter>
          </>
        </div>
        <div id="body" className="bg-success-subtle col-8">
          
        </div>
      </div>

    </div>
  )
}

