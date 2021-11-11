import TableView from "./table";
import React from "react";

class RoutineView extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <h2><i className="bi bi-laptop"></i> Class Routine</h2>
                    <div className="vertical-padding"></div>

                    <ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active text" id="pills-a1-tab" data-bs-toggle="pill" data-bs-target="#pills-a1" type="button" role="tab" aria-controls="pills-a1" aria-selected="true"> <b> A1 </b> </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text" id="pills-a2-tab" data-bs-toggle="pill" data-bs-target="#pills-a2" type="button" role="tab" aria-controls="pills-a2" aria-selected="false"> <b> A2 </b> </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text" id="pills-b1-tab" data-bs-toggle="pill" data-bs-target="#pills-b1" type="button" role="tab" aria-controls="pills-b1" aria-selected="false"> <b> B1 </b></button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text" id="pills-b2-tab" data-bs-toggle="pill" data-bs-target="#pills-b2" type="button" role="tab" aria-controls="pills-b2" aria-selected="false"> <b>B2</b></button>
                        </li>
                    </ul>

                    <div className="vertical-padding"></div>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-a1" role="tabpanel" aria-labelledby="pills-a1-tab">
                            <TableView range="A2:H6"></TableView>
                        </div>
                        <div className="tab-pane fade" id="pills-a2" role="tabpanel" aria-labelledby="pills-a2-tab">
                            <TableView range="A8:H12"></TableView>
                        </div>
                        <div className="tab-pane fade" id="pills-b1" role="tabpanel" aria-labelledby="pills-b1-tab">
                            <TableView range="A14:H18"></TableView>
                        </div>
                        <div className="tab-pane fade" id="pills-b2" role="tabpanel" aria-labelledby="pills-b2-tab">
                            <TableView range="A20:H24"></TableView>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }

}

export default RoutineView;