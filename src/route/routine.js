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
                    <div className="table-responsive">
                        <div className="container">
                            <center>
                                <iframe width="100%" height="600" title="Class Routine" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQFvW37K3fGLqAF5yK-EvHL9mo9SbUyzY2KD2ujPeY9CTPKdVUcFIDrPgNDqlBbQn-de24CqmZNBSNn/pubhtml?gid=1924384441&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                            </center>
                        </div>
                    </div>
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                    <div className="vertical-padding"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default RoutineView;