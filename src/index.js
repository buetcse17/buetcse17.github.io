import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import NoticeView from "./route/notice";
import RoutineView from "./route/routine";
import DriveView from "./route/drive";
import FileView from './route/files';

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
            <button className="nav-link active text-white" id="pills-routine-tab" data-bs-toggle="pill" data-bs-target="#pills-routine" type="button" role="tab" aria-controls="pills-routine" aria-selected="true">Routine</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-drive-tab" data-bs-toggle="pill" data-bs-target="#pills-drive" type="button" role="tab" aria-controls="pills-drive" aria-selected="false">Drive</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-notice-tab" data-bs-toggle="pill" data-bs-target="#pills-notice" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Notices</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-file-tab" data-bs-toggle="pill" data-bs-target="#pills-file" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Files</button>
          </li>
        </ul>
      </div>
    </nav>

    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-routine" role="tabpanel" aria-labelledby="pills-routine-tab">
        <RoutineView></RoutineView>
      </div>
      <div className="tab-pane fade" id="pills-drive" role="tabpanel" aria-labelledby="pills-drive-tab">
        <DriveView></DriveView>
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