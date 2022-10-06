import React from "react";
import SelectTag from "../../common/SelectTag";
import ProductWiseChart from "./ProductWiseChart";
import { MonthYearly } from "../StaticData";

const ProductWiseLeads = () => {
    return (
        <>
            <div className="panel">
                <div className="head_top">
                    <div className="row  align-items-center ">
                        <div className="col-7">
                            <h5>Product Wise Leads</h5>
                        </div>
                        <div className="col-5">
                            <SelectTag Label="" Required optionData={MonthYearly} customClass="custom-textfield ms-auto" />
                        </div>
                    </div>
                </div>
                <ProductWiseChart />
            </div>
        </>
    );
}
export default ProductWiseLeads;