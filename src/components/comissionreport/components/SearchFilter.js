import React, { useState } from "react";
import BrowserModal from "../../common/BrowserModal";
import InputTag from "../../common/InputTag";
import Modal from "../../common/Modal";
import SelectTag from "../../common/SelectTag";
import TextareaTag from "../../common/TextareaTag";
import { Branch, Product, Assigneedto } from "../../manage lead/StaticData";

const SearchFilter = () => {

    const [show,setShow] = useState(false);

    const [change, setChange] = useState({ customerName: "", LeadID: "", StartDate: "", EndDate: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setChange({ ...change, [name]: value });
    }
    return (
        <>
            <div className="panel">
                <div className="head_top">
                    <h4>Search Filter</h4>
                </div>

                <form className="p-3">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <SelectTag Label="Product" optionData={Product} customClass=" " />
                        </div>
                        <div className="col-md-4 mb-2">
                            <SelectTag Label="Branch" optionData={Branch} customClass=" " />
                        </div>
                        <div className="col-md-4 mb-2">
                            <SelectTag Label="Assigneed to" optionData={Assigneedto} customClass=" " />
                        </div>
                        <div className="col-md-4 mb-2">
                            <InputTag Label="Start Date" Type="date" Placeholder="Start Date" Value={change.StartDate} onChangeValue={handleChange} name="StartDate" classcol="" Required />
                        </div>
                        <div className="col-md-4 mb-2">
                            <InputTag Label="End Date" Type="date" Placeholder="End Date" Value={change.EndDate} onChangeValue={handleChange} name="EndDate" classcol="" Required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" className="btn btn-custom" onClick={()=> setShow(!show)}>Submit</button>
                        </div>
                    </div>
                </form>

            </div>
            {show && <Modal ModalTitle="Document Upload" btnName="Submit" btncancel="Close" show={show} setShow={setShow} modalcustom="modal-dialog-centered" ContentID="examplemodal">
                <BrowserModal change={change} setChange={setChange} handleChange={handleChange} />
                <TextareaTag Label="Comment" Rowcount="3"  />
            </Modal>}
        </>
    );
}
export default SearchFilter;