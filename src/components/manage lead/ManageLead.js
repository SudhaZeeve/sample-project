import React from "react";
import Pagination from "../common/Pagination";
import ManageLeadTable from "./components/ManageLeadTable";
import SearchFilter from "./components/SearchFilter"

const ManageLead = () => {
    return (
        <>
            <SearchFilter />
            <ManageLeadTable />
            <Pagination />
        </>
    );
}
export default ManageLead;