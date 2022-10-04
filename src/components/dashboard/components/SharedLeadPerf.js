import React from "react";
import SharePeformanceChart from "./SharePeformanceChart";

const SharedLeadPerf = () => {
    return (
        <>
            <div className="panel">
                <div className="head_top">
                    <h5>Shared Lead Performance</h5>
                </div>
                <div className="p-3">
                    <div className="row">
                        <div className="col-md-12">
                            <select className="form-control custom-textfield height ms-auto">
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <SharePeformanceChart />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>Leads Shared</b><br />200,000 Leads</p>
                            <p className="mb-0"><b>Leads Approved</b><br />200,000 Leads</p>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-end">
                            <div className="progress blue"> <span className="progress-left"> <span
                                className="progress-bar"></span> </span> <span
                                    className="progress-right"> <span className="progress-bar"></span> </span>
                                <div className="progress-value"><b>10%</b><br /><span>Approved</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SharedLeadPerf;