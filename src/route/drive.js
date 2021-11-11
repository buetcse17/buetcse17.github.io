import React from "react";
import { DRIVE_LINK } from "../config.json";


const DriveView = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="vertical-padding"></div>
                <div className="vertical-padding"></div>
                <h2><i className="bi bi-hdd-fill"></i> Drive</h2>

                <div className="vertical-padding"></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"><h5>Level & Term</h5></th>
                            <th scope="col"><h5>Our Drive</h5></th>
                            <th scope="col"><h5>Seniors' Drive</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            DRIVE_LINK.reverse().map((each, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ each.name }</td>
                                        <td>
                                            <a className="btn btn-success btn-sm" href={ each.link } target="_blank" rel="noreferrer">
                                                Open
                                            </a>
                                        </td>
                                        <td>
                                            <a className="btn btn-primary btn-sm" href={ each.senior_link } target="_blank" rel="noreferrer">
                                                Open
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default DriveView;