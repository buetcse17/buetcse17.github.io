import React from "react";

class MoodleCourseView extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        return (
            <div className="accordion-item">

                <h2 className="accordion-header" id="heading">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#collapse-" + this.props.index}
                    >
                        <h5>{this.props.course}</h5>
                    </button>
                </h2>

                <div
                    id={"collapse-" + this.props.index}
                    className="accordion-collapse collapse"
                    aria-labelledby="heading"
                    data-bs-parent="#accordionMaster"
                >

                    <div className="accordion-body">
                        <div className="accordion" id={"sub-accordion-" + this.props.index}>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id={"sub-acc-" + this.props.index}>
                                    <button 
                                        className="accordion-button" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target={"#sub-collapse-" + this.props.index}
                                    >
                                        <strong style={{fontSize: "1.2rem", fontWeight: "800"}}>Forum Posts ({ this.props.forum.length })</strong>
                                    </button>
                                </h2>

                                <div 
                                    id={"sub-collapse-" + this.props.index}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={"sub-acc-" + this.props.index}
                                    data-bs-parent={"#sub-accordion-" + this.props.index}
                                >
                                    <div className="accordion-body">
                                        <div className="list-group">
                                            {
                                                this.props.forum.map((row, index) => {
                                                    return (
                                                        <a
                                                            href={row.url}
                                                            className="list-group-item list-group-item-action"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            
                                                            {row.text}
                                                        </a>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-padding"></div>
                        {
                            this.props.content.map((row, index) => {
                                return (
                                    <div key={index} className="container">
                                        <h5>{row.title}</h5>
                                        <div className="list-group">
                                            {
                                                row.items.map((listItem, listIndex) => {
                                                    return (
                                                        <a
                                                            href={listItem.url}
                                                            className="list-group-item list-group-item-action"
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            { listItem.text }
                                                        </a>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="vertical-padding"></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }


}

export default MoodleCourseView;