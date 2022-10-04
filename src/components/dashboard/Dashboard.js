import React, { useState } from "react"
import InputTag from "../common/InputTag";
import Assignee from "./components/Assignee";
import DailyActivities from "./components/DailyActivities";
import ProductWiseChart from "./components/ProductWiseChart";
import ProductWiseLeads from "./components/ProductWiseLeads";
import SharedLeadPerf from "./components/SharedLeadPerf";
import SharedLeadsCharts from "./components/SharedLeadsCharts";
import SharePeformanceChart from "./components/SharePeformanceChart";
import StatusSharedLead from "./components/StatusSharedLead";
import { AssigneeData } from "./StaticData";

const Dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-8 h-100">
                    <StatusSharedLead />
                    <DailyActivities />
                </div>
                <div className="col-md-4 pl-0 ">
                    <SharedLeadPerf />
                    <ProductWiseLeads />
                    <Assignee AssigneeData={AssigneeData} />
                </div>
            </div>
        </>
    );
}
export default Dashboard;