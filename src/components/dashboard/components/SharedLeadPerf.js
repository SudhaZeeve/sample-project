import React from "react";
import SelectTag from "../../common/SelectTag";
import SharePeformanceChart from "./SharePeformanceChart";
import { Yearly } from "../StaticData";

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
                            <SelectTag Label="" Required optionData={Yearly} customClass="custom-textfield ms-auto" />
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