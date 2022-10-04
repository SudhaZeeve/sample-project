import React, { useState } from "react";
import InputTag from "../../common/InputTag";
import SharedLeadsCharts from "./SharedLeadsCharts";


const StatusSharedLead = () => {

    const [change, setChange] = useState({ Date: "", Password: "", });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setChange({ ...change, [name]: value });
    }
    
    return (
        <>
            <div className="panel">
                <div className="head_top">
                    <div className="row justify-content-between">
                        <div className="col-5 d-flex align-items-center">
                            <h4>Status of Shared Leads</h4>
                        </div>
                        <div className="col-3 d-flex justify-content-end gap-3">
                            <InputTag Label="" Type="date" Placeholder="" Value={change.Date} onChangeValue={handleChange} name="Date" classNamecol="ms-auto" />
                            <InputTag Label="" Type="date" Placeholder="" Value={change.Date} onChangeValue={handleChange} name="Date" classNamecol="ms-auto" />
                        </div>
                    </div>
                </div>
                <div > <SharedLeadsCharts /> </div>
                <ul className="chart-listing text-center">
                    <li>
                        <div className="bg blue-bg"></div>
                        <div className="data">4675<br /><span>Contacted</span></div>
                    </li>
                    <li>
                        <div className="bg orange-bg"></div>
                        <div className="data">2158<br /><span>Approved</span></div>
                    </li>
                    <li>
                        <div className="bg light-blue-bg"></div>
                        <div className="data">1169<br /><span>On-hold</span></div>
                    </li>
                    <li>
                        <div className="bg yellow-bg"></div>
                        <div className="data">629<br /><span>Rejected</span></div>
                    </li>
                    <li>
                        <div className="bg light-bg"></div>
                        <div className="data">359<br /><span>Logged</span></div>
                    </li>

                </ul>
            </div>
        </>
    );
}
export default StatusSharedLead;