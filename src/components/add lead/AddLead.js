import React, { useState } from "react";
import TabsTag from "../common/TabsTag";
import { Tablist } from "./Staticdata";

const AddLead = () => {
    const [tab, setTab] = useState("AddNewLead");
    return (
        <>
            <TabsTag Tablist={Tablist} tab={tab} setTab={setTab} />
            <div className="tab-content p-3" id="myTabContent">
                {tab === "AddNewLead" &&
                    <div className="tab-pane fade show active " id="AddNewLead" role="tabpanel" aria-labelledby="AddNewLead-tab">
                        <div className="">
                            <h6 className="mb-4 ">Add Note</h6>
                        </div>
                    </div>}
                    {tab === "BulkUpload" &&
                    <div className="tab-pane fade show active " id="BulkUpload" role="tabpanel" aria-labelledby="BulkUpload-tab">
                        <div className="">
                            <h6 className="mb-4 ">BulkUpload</h6>
                        </div>
                    </div>}
            </div>
        </>
    );
}
export default AddLead;