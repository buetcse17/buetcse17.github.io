import { API_KEY, SHEET_ID, SHEET_BASEURL, SHEETS_NAME } from "../config.json";
import React from "react";
import axios from "axios";


const sheetName = SHEETS_NAME.notice;
const range = "A2:C12";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;


class NoticeView extends React.Component {

    state = { sheetData: [], ready: false };

    fetchData = () => {
        axios.get(url)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                this.setState({ sheetData: cleanData, ready: true });
            }).catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        const { sheetData, ready } = this.state;

        if (ready) {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="vertical-padding"></div>
                        <div className="vertical-padding"></div>
                        <h2><i className="bi bi-bell"></i> Notice Board</h2>
                        <div className="vertical-padding"></div>
                        {
                            sheetData.map((each, index) => {
                                return (
                                    <div key={index}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="card-title">{each[0]}</h3>
                                                <p className="card-text">{each[1]}</p>
                                                <a href={each[2]} target="_blank" rel="noreferrer" className="btn btn-primary">Click here</a>
                                            </div>
                                        </div>
                                        <div className="vertical-padding"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </React.Fragment>
            );
        }
        return null;
    }

}


export default NoticeView;