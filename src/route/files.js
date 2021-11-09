import { API_KEY, SHEET_ID, SHEET_BASEURL, SHEETS_NAME } from "../config.json";
import React from "react";
import axios from "axios";


const sheetName = SHEETS_NAME.file;
const range = "A2:B12";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;


class FileView extends React.Component {

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
                        <h2><i className="bi bi-file-earmark-text"></i> Files</h2>

                        <div className="vertical-padding"></div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">File Name</th>
                                    <th scope="col">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sheetData.map((each, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><p>{each[0]}</p></td>
                                                <td>
                                                    <a className="btn btn-primary btn-sm" href={each[1]} target="_blank" rel="noreferrer">
                                                        Download
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
        return null;
    }

}


export default FileView;