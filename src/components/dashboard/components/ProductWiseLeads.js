import React from "react";
import ProductWiseChart from "./ProductWiseChart";

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
                            <select className="form-control custom-textfield height float-right">
                                <option>July, 2021</option>
                                <option>June, 2021</option>
                                <option>May, 2021</option>
                                <option>April, 2021</option>
                                <option>March, 2021</option>
                            </select>

                        </div>
                    </div>
                </div>
                <ProductWiseChart />
            </div>
        </>
    );
}
export default ProductWiseLeads;