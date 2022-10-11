import React, { useState } from "react";
import TabsTag from "../common/TabsTag";
import AddBulkTab from "./components/AddBulkTab";
import { Tablist } from "./Staticdata";

const AddLead = () => {
    const [tab, setTab] = useState("AddNewLead");
    return (
        <>
            <TabsTag Tablist={Tablist} tab={tab} setTab={setTab} />
            <AddBulkTab tab={tab} setTab={setTab} />
        </>
    );
}
export default AddLead;