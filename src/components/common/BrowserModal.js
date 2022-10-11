import React from "react";
import BrowseBtn from "./BrowseBtn";
import InputTag from "./InputTag";

const BrowserModal = ({handleChange,change}) => {
    return (
        <div className="row my-3">
            <div className="col-md-9">
                <InputTag Label="" Type="text" Placeholder="Search File" Value={change.search} onChangeValue={handleChange} name="search" classcol="" />
            </div>
            <div className="col-md-3 d-flex align-items-center">
               <BrowseBtn />
            </div>
        </div>
    );
}
export default BrowserModal;