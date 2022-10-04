import React from "react";

const DailyActivities = () => {
    return (
        <>
            <div className="panel">
                <div className="head_top">
                    <div className="row  align-items-center ">
                        <div className="col-8 ">
                            <h4>Daily activities</h4>
                        </div>
                        <div className="col-4">
                            <select className="form-control custom-textfield ms-auto">
                                <option>8 July, 2021</option>
                                <option>8 June, 2021</option>
                                <option>8 May, 2021</option>
                                <option>8 April, 2021</option>
                                <option>8 March, 2021</option>
                            </select>

                        </div>

                    </div>
                </div>
                <div className="p-3">
                    <ul className="listing mb-0">
                        <li><span className="time">4:30 pm</span> - LD001 loan application is <span
                            className="text-success">approved</span></li>
                        <li><span className="time">4:26 pm</span> - LD001, LD002 and LD004 were <span
                            className="text-primary">contacted</span></li>
                        <li><span className="time">4:15 pm</span> - LD011 loan application is <span
                            className="text-danger">rejected</span></li>
                        <li><span className="time">4:04 pm</span> - LD012 loan application is <span
                            className="text-warning">on hold</span></li>

                    </ul>
                </div>
            </div>
        </>
    );
}
export default DailyActivities;