import React from "react"
import Assignee from "./components/Assignee";
import DailyActivities from "./components/DailyActivities";
import ProductWiseLeads from "./components/ProductWiseLeads";
import SharedLeadPerf from "./components/SharedLeadPerf";
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