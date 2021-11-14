import { API_KEY, SHEET_ID, SHEET_BASEURL, CACHE_INTERVAL } from "../config.json";
import React from "react";
import axios from "axios";

const range = "A2:C99";
const sheetName = "books";
const url = `${SHEET_BASEURL}/${SHEET_ID}/values/${sheetName}!${range}?key=${API_KEY}`;

class BooksView extends React.Component {

    state = { booksData: [], ready: false };

    fetchData = () => {
        axios.get(url)
            .then(data => {
                var cleanData = data.data.values.filter(x => !!x);
                this.setState({ booksData: cleanData, ready: true });
                
                localStorage.setItem("booksData", JSON.stringify(cleanData));
                localStorage.setItem("lastBooksTime", Date.now());
            }).catch(err => console.log(err))
    }

    componentDidMount() {
        const lastTime = Number(localStorage.getItem("lastBooksTime"));
        const cachedData = localStorage.getItem("booksData");
        const nowTime = Date.now();
        
        if ((!cachedData) || (lastTime + CACHE_INTERVAL < nowTime)) {
            this.fetchData();
        }
        else {
            const cachedData = JSON.parse(localStorage.getItem("booksData"));
            this.setState({ booksData: cachedData, ready: true });
        }
    }

    render() {

        const { booksData, ready } = this.state;

        if (ready) {
            return (
                <React.Fragment>
                    <div className="container">
                        <div className="vertical-padding"></div>
                        <div className="vertical-padding"></div>
                        <h2><i className="bi bi-book"></i> Books</h2>

                        <div className="vertical-padding"></div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Course</th>
                                        <th scope="col">Book Name</th>
                                        <th scope="col">Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        booksData.map((each, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td><b>{each[0]}</b></td>
                                                    <td>{each[1]}</td>
                                                    <td>
                                                        <a className="btn btn-primary btn-sm" href={each[2]} target="_blank" rel="noreferrer">
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


export default BooksView;
