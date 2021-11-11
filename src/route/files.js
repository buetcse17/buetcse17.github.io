import { API_KEY, SHEET_ID, SHEET_BASEURL, CACHE_INTERVAL } from "../config.json";
import React from "react";
import axios from "axios";

const range = "A2:B12";
const sheetName = "files";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

class FileView extends React.Component {

    state = { filesData: [], ready: false };

    fetchData = () => {
        axios.get(url)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                this.setState({ filesData: cleanData, ready: true });
                
                localStorage.setItem("filesData", JSON.stringify(cleanData));
                localStorage.setItem("lastFilesTime", Date.now());
            }).catch(err => console.log(err))
    }

    componentDidMount() {
        const lastTime = Number(localStorage.getItem("lastFilesTime"));
        const cachedData = localStorage.getItem("filesData");
        const nowTime = Date.now();
        
        if ((!cachedData) || (lastTime + CACHE_INTERVAL < nowTime)) {
            this.fetchData();
        }
        else {
            const cachedData = JSON.parse(localStorage.getItem("filesData"));
            this.setState({ filesData: cachedData, ready: true });
        }
    }

    render() {

        const { filesData, ready } = this.state;

        if (ready) {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="vertical-padding"></div>
                        <div className="vertical-padding"></div>
                        <h2><i className="bi bi-file-earmark-text"></i> Files</h2>

                        <div className="vertical-padding"></div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">File Name</th>
                                        <th scope="col">Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filesData.map((each, index) => {
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
                    </div>
                </React.Fragment>
            );
        }
        return null;
    }

}


export default FileView;