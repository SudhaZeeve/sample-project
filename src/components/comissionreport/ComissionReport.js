import React from "react";
import Pagination from "../common/Pagination";
import CommissionReportTable from "./components/ComissionReportTable";
import SearchFilter from "./components/SearchFilter";


const CommissionReport = () =>{
    return(
        <>
            <SearchFilter />
            <CommissionReportTable />
            <Pagination />
        </>
    );
}
export default CommissionReport;