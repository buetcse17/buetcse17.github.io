import { MOODLE_API_BASEURL, CACHE_INTERVAL } from "../config.json";
import React from "react";
import axios from "axios";

import MoodleCourseView from "./moodle-course";

const forumUrl = `${MOODLE_API_BASEURL}/forum-data`;
const courseUrl = `${MOODLE_API_BASEURL}/course-data`;

class MoodleView extends React.Component {

    state = { forumData: {}, courseData: {}, ready: false };

    fetchData = () => {

        axios.get(forumUrl)
            .then(data => {
                const cleanedData = data.data;
                this.setState({ forumData: cleanedData, courseData: {}, ready: false });

                localStorage.setItem("forumData", JSON.stringify(cleanedData));
                localStorage.setItem("lastForumDataTime", Date.now());
            }).catch(err => console.log(err));

        axios.get(courseUrl)
            .then(data => {
                const cleanedData = data.data;
                this.setState({ forumData: this.state.forumData, courseData: cleanedData, ready: true });

                localStorage.setItem("courseData", JSON.stringify(cleanedData));
                localStorage.setItem("lastCourseDataTime", Date.now());
            }).catch(err => console.log(err));

    }

    componentDidMount() {
        const lastForumTime = Number(localStorage.getItem("lastForumDataTime"));
        const cachedForumData = localStorage.getItem("forumData");
        const nowForumTime = Date.now();

        if ((!cachedForumData) || (lastForumTime + CACHE_INTERVAL * 2 < nowForumTime)) {
            this.fetchData();
        }
        else {
            const cachedData = JSON.parse(localStorage.getItem("forumData"));
            this.setState({
                forumData: cachedData,
                courseData: this.state.courseData,
                ready: true
            });
        }

        const lastCourseTime = Number(localStorage.getItem("lastCourseDataTime"));
        const cachedCourseData = localStorage.getItem("courseData");
        const nowCourseData = Date.now();

        if ((!cachedCourseData) || (lastCourseTime + CACHE_INTERVAL * 2 < nowCourseData)) {
            this.fetchData();
        }
        else {
            const cachedData = JSON.parse(localStorage.getItem("courseData"));
            this.setState({
                courseData: cachedData,
                forumData: this.state.forumData,
                ready: true
            });
        }

    }

    render() {

        const { forumData, courseData, ready } = this.state;

        if (ready) {

            const courseList = Object.keys(courseData);
            var masterData = [];

            console.log(forumData);

            courseList.map((courseName, index) => {
                masterData.push({
                    "course": courseName,
                    "content": courseData[courseName],
                    "forum": forumData[courseName] || []
                })
                return 0;
            })

            console.log(masterData);
            console.log(forumData);

            return (
                <React.Fragment>
                    <div className="container">
                        <div className="vertical-padding"></div>
                        <div className="vertical-padding"></div>
                        <h2><i className="bi bi-book"></i> Moodle X</h2>

                        <div className="vertical-padding"></div>
                        <div className="table-responsive">
                            <div className="accordion" id="accordionMaster">
                                {
                                    masterData.map((course, index) => {
                                        return (
                                            <MoodleCourseView
                                                index={index}
                                                course={course.course}
                                                forum={course.forum}
                                                content={course.content}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        return null;
    }

}


export default MoodleView;
