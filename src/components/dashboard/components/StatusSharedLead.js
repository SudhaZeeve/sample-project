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
                            <InputTag Label="" Type="date" Placeholder="" Value={change.Date} onChangeValue={handleChange} name="Date" classcol="ms-auto" />
                            <InputTag Label="" Type="date" Placeholder="" Value={change.Date} onChangeValue={handleChange} name="Date" classcol="ms-auto" Required />
                        </div>
                    </div>
                </div>
                <div > <SharedLeadsCharts /> </div>
                <ul className="chart-listing text-center">
                    {chartListing.map((key, index) => {
                        return (
                            <li key={index}>
                                <div className={`bg ${key.classBg}`}></div>
                                <div className="data">{key.Count}<br /><span>{key.Name}</span></div>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        </>
    );
}
export default StatusSharedLead;

export const chartListing = [
    {
        classBg: "blue-bg",
        Count: "4675",
        Name: "Contacted"
    },
    {
        classBg: "orange-bg",
        Count: "2158",
        Name: "Approved"
    },
    {
        classBg: "light-blue-bg",
        Count: "1169",
        Name: "On-hold"
    },
    {
        classBg: "yellow-bg",
        Count: "629",
        Name: "Rejected"
    },
    {
        classBg: "light-bg",
        Count: "359",
        Name: "Logged"
    },
];