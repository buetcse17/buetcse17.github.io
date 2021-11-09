import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { SHEET_ID } from "./config.json";
import NoticeView from "./route/notice";
import ClassView from "./route/class";
import DriveView from "./route/drive";
import FileView from './route/files';


const sheetsUrl = `https://docs.google.com/spreadsheets/d/${SHEET_ID}`
const rootElement = document.getElementById("root");

ReactDOM.render(
  
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <div className="container">
        <a className="navbar-brand text-white" href="/">
          <h4>CITAD <i className=" bi bi-explicit"></i> X </h4>
        </a>
        <ul className="nav nav-pills text-white" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active text-white" id="pills-drive-tab" data-bs-toggle="pill" data-bs-target="#pills-drive" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Drive</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-class-tab" data-bs-toggle="pill" data-bs-target="#pills-class" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Classes</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-notice-tab" data-bs-toggle="pill" data-bs-target="#pills-notice" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Notices</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-file-tab" data-bs-toggle="pill" data-bs-target="#pills-file" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Files</button>
          </li>
          <li className="nav-item">
            <a href={sheetsUrl} target="_blank" rel="noreferrer" className="nav-link text-white" type="button">Sheets</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-drive" role="tabpanel" aria-labelledby="pills-drive-tab">
        <DriveView></DriveView>
      </div>
      <div className="tab-pane fade" id="pills-class" role="tabpanel" aria-labelledby="pills-class-tab">
        <ClassView></ClassView>
      </div>
      <div className="tab-pane fade" id="pills-notice" role="tabpanel" aria-labelledby="pills-notice-tab">
        <NoticeView></NoticeView>
      </div>
      <div className="tab-pane fade" id="pills-file" role="tabpanel" aria-labelledby="pills-file-tab">
        <FileView></FileView>
      </div>
    </div>
  </div>,

  rootElement
);