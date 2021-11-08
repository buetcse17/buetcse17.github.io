import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './components/navbar';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NoticeView from "./route/notice";
import ClassView from "./route/class";
import HomeView from "./route/home";
import FileView from './route/files';

const rootElement = document.getElementById("root");

ReactDOM.render(

  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeView />}></Route>
      <Route path="notices" element={<NoticeView />}></Route>
      <Route path="classes" element={<ClassView />}></Route>
      <Route path="files" element={<FileView />}></Route>
    </Routes>
  </BrowserRouter>,

  rootElement
);
