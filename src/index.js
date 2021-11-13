import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import FileView from './route/files';
import DriveView from "./route/drive";
import RoutineView from "./route/routine";
import ClassLinkView from "./route/class-link";
import { MOODLE_IP } from "./config.json";


const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
      <div className="container">

        <a className="navbar-brand text-white" href="/">
          <h4>CITAD <i className=" bi bi-explicit"></i> X </h4>
        </a>

        <ul className="nav nav-pills text-white">
          <li className="nav-item" role="presentation">
            <button className="nav-link active text-white" id="pills-routine-tab" data-bs-toggle="pill" data-bs-target="#pills-routine" type="button" role="tab" aria-controls="pills-routine" aria-selected="true">Routine</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-class-link-tab" data-bs-toggle="pill" data-bs-target="#pills-class-link" type="button" role="tab" aria-controls="pills-class-link" aria-selected="false">Class Links</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-drive-tab" data-bs-toggle="pill" data-bs-target="#pills-drive" type="button" role="tab" aria-controls="pills-drive" aria-selected="false">Drive</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-file-tab" data-bs-toggle="pill" data-bs-target="#pills-file" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Files</button>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" type="button" href={MOODLE_IP} target="_blank" rel="noreferrer">Moodle (IP)</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-routine" role="tabpanel" aria-labelledby="pills-routine-tab">
        <RoutineView></RoutineView>
      </div>
      <div className="tab-pane fade" id="pills-class-link" role="tabpanel" aria-labelledby="pills-class-link-tab">
        <ClassLinkView />
      </div>
      <div className="tab-pane fade" id="pills-drive" role="tabpanel" aria-labelledby="pills-drive-tab">
        <DriveView></DriveView>
      </div>
      <div className="tab-pane fade" id="pills-file" role="tabpanel" aria-labelledby="pills-file-tab">
        <FileView></FileView>
      </div>
    </div>
  </div>,

  rootElement
);