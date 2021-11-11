import axios from "axios";
import React from "react";
import { SHEETS_NAME, SHEET_BASEURL, SHEET_ID, API_KEY } from "../config.json";


class TableView extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    state = { routineData: [], linkListData: {}, ready: false };

    linkListUrl = `${SHEET_BASEURL}/${SHEET_ID}/values/${SHEETS_NAME.linklist}?key=${API_KEY}`;
    routineUrl = `${SHEET_BASEURL}/${SHEET_ID}/values/${SHEETS_NAME.routine}!${this.props.range}?key=${API_KEY}`;

    fetchRoutine = () => {
        axios.get(this.routineUrl)
            .then(data => {
                var cleanRoutineData = data.data.values;
                this.setState({ routineData: cleanRoutineData, linkListData: {}, ready: false });
            }).catch(err => console.log(err));
    }

    fetchLinkList = () => {
        axios.get(this.linkListUrl)
            .then(data => {
                var jsonData = {};
                data.data.values.forEach(element => {
                    jsonData[element[0]] = element[1];
                });
                this.setState({ routineData: this.state.routineData, linkListData: jsonData, ready: true });
            }).catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchRoutine();
        this.fetchLinkList();
    }

    render() {

        const { routineData, linkListData, ready } = this.state;

        if (ready) {
            return (
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th scope="col"><h6>Day</h6></th>
                                <th scope="col"><h6>8 AM</h6></th>
                                <th scope="col"><h6>9 AM</h6></th>
                                <th scope="col"><h6>10 AM</h6></th>
                                <th scope="col"><h6>11 AM</h6></th>
                                <th scope="col"><h6>12 PM</h6></th>
                                <th scope="col"><h6>1 PM</h6></th>
                                <th scope="col"><h6>2 PM</h6></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                routineData.map((each, index) => {
                                    return (
                                        <tr key={index}>
                                            {
                                                each.map((cell, index) => {
                                                    if (cell[cell.length - 1] % 2 === 0) {
                                                        return (<td key={index}>
                                                            <a className="btn btn-warning btn-sm" href={linkListData[cell]}>
                                                                {cell}
                                                            </a>
                                                        </td>
                                                        )
                                                    }
                                                    else if (cell[cell.length - 1] % 2 === 1) {
                                                        return (<td key={index}>
                                                            <a className="btn btn-primary btn-sm" href={linkListData[cell]}>
                                                                {cell}
                                                            </a>
                                                        </td>
                                                        )
                                                    }
                                                    else {
                                                        if (cell) {
                                                            if(cell == "CT"){
                                                                return (<td key={index}>
                                                                    <a className="btn btn-danger btn-sm">
                                                                        {cell}
                                                                    </a>
                                                                </td>
                                                                )                                                          
                                                            }
                                                            return (
                                                                <td key={index}>{cell}</td>
                                                            )
                                                        }
                                                        return <td key={index}>{""}</td>
                                                    }
                                                })
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
        return null;
    }
}

export default TableView;