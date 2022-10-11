import React, { useState } from "react";
import InputTag from "../../common/InputTag";
import SelectTag from "../../common/SelectTag";
import AddCard from "./AddCard";
import { Gender, Type, Residential, Rented, Manufacturing, Industry, SubIndustry, BusinessConstitution, InputvalueData } from "../Staticdata";
import Upload from "./Upload";
import BrowseBtn from "../../common/BrowseBtn";


const AddBulkTab = ({ tab, setTab }) => {

    const [toast,setToast] = useState(false);

    const [change, setChange] = useState({ Name: "", Email: "", Mobileno: "", PAN: "", DateofBirth: "", Networth: "", LoanAmount: "", Ownership: "", Areaofproperty: "", Tentativemarketvalue: "", EntityName: "", PromoterName: "", Designation: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setChange({ ...change, [name]: value });
    }

    return (
        <>
            <div className="tab-content p-3" id="myTabContent">
                {tab === "AddNewLead" &&
                    <div className="tab-pane fade show active " id="AddNewLead" role="tabpanel" aria-labelledby="AddNewLead-tab">
                        <div className="">
                            <AddCard Heading="Personal Details">
                                <div className="row my-3">
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Name" Type="text" Placeholder="Name" Value={change.Name} onChangeValue={handleChange} name="Name" classcol="" />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Email" Type="email" Placeholder="Email" Value={change.Email} onChangeValue={handleChange} name="Email" classcol="" />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Mobile no." Type="tel" Placeholder="Mobile no." Value={change.Mobileno} onChangeValue={handleChange} name="Mobileno" classcol="" />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <SelectTag Label="Gender" optionData={Gender} customClass=" " />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Date of Birth" Type="date" Placeholder="Date of Birth" Value={change.DateofBirth} onChangeValue={handleChange} name="DateofBirth" classcol="" />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="PAN" Type="number" Placeholder="PAN" Value={change.PAN} onChangeValue={handleChange} name="PAN" classcol="" />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Networth" Type="number" Placeholder="Networth" Value={change.Networth} onChangeValue={handleChange} name="Networth" classcol="" />
                                    </div>
                                </div>
                            </AddCard>
                            <AddCard Heading="Loan Details" >
                                <div className="row my-3">
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <SelectTag Label="Type" optionData={Type} customClass=" " />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Loan Amount" Type="number" Placeholder="Loan Amount" Value={change.LoanAmount} onChangeValue={handleChange} name="LoanAmount" classcol="" Required />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Ownership" Type="text" Placeholder="Ownership" Value={change.Ownership} onChangeValue={handleChange} name="Ownership" classcol="" Required />
                                    </div>
                                </div>
                            </AddCard>
                            <AddCard Heading="Collateral Details" >
                                <div className="row my-3">
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <SelectTag Label="Residential" optionData={Residential} customClass=" " Required />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <SelectTag Label="Rented " optionData={Rented} customClass=" " Required />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Area of property (approx)" Type="text" Placeholder="Area of property (approx)" Value={change.Areaofproperty} onChangeValue={handleChange} name="Areaofproperty" classcol="" />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Tentative market value" Type="text" Placeholder="Tentative market value" Value={change.Tentativemarketvalue} onChangeValue={handleChange} name="Tentativemarketvalue" classcol="" Required />
                                    </div>
                                </div>
                            </AddCard>
                            <AddCard Heading="Business Details" >
                                <div className="row my-3">
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Entity Name" Type="text" Placeholder="Entity Name" Value={change.EntityName} onChangeValue={handleChange} name="EntityName" classcol="" />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <SelectTag Label="Manufacturing " optionData={Manufacturing} customClass=" " Required />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <SelectTag Label="Industry" optionData={Industry} customClass=" " Required />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <SelectTag Label="Sub-Industry" optionData={SubIndustry} customClass=" " Required />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <SelectTag Label="Business Constitution" optionData={BusinessConstitution} customClass=" " Required />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Tentative market value" Type="text" Placeholder="Tentative market value" Value={change.Tentativemarketvalue} onChangeValue={handleChange} name="Tentativemarketvalue" classcol="" Required />
                                    </div>
                                </div>
                            </AddCard>
                            <AddCard Heading="Management Details" >
                                <div className="row my-3">
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Promoter Name" Type="text" Placeholder="Promoter Name" Value={change.PromoterName} onChangeValue={handleChange} name="PromoterName" classcol="" Required />
                                    </div>
                                    <div className="col-xl-4 col-sm-12 col-md-6 col-lg-4 mb-3">
                                        <InputTag Label="Designation" Type="text" Placeholder="Designation " Value={change.Designation} onChangeValue={handleChange} name="Designation " classcol="" Required />
                                    </div>
                                </div>
                            </AddCard>
                            <AddCard Heading="Document upload" subheading="[max file size 2 mb/ only JPG, PNG, DOC, DOCX, XLS, XLSX format allowed]" >
                                <div className="my-3">
                                    <Upload InputvalueData={InputvalueData} />
                                </div>
                            </AddCard>
                        </div>

                    </div>}
                {tab === "BulkUpload" &&
                    <div className="tab-pane fade show active " id="BulkUpload" role="tabpanel" aria-labelledby="BulkUpload-tab">
                        <div className="panel mt-1 pb-4">
                            <div class="head_top border-0 d-flex align-items-center mt-3">
                                <h4 class="font-r">Select File <span className="text-primary ms-3">(Download Template)</span> </h4>
                            </div>
                            <div class="col-md-5 px-3">
                                <div class="row">
                                    <div className="row my-3">
                                        <div className="col-md-9">
                                            <InputTag Label="" Type="text" Placeholder="Search File" Value={change.search} onChangeValue={handleChange} name="search" classcol="" />
                                        </div>
                                        <div className="col-md-3 d-flex align-items-center">
                                            <BrowseBtn />
                                        </div>
                                        <small class="text-gray">[max file size 10 mb/ only .xls file
                                            allowed]</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>}
                <div className="my-3">
                    <button onClick={()=>setToast(!toast)} type="button" className="btn btn-custom" id="liveToastBtn">Submit</button>
                    <button type="button" className="btn btnclose ms-2">Cancel</button>
                </div>

                {toast && <div className="bg-danger p-3 col-md-3 ms-auto">
                    <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                </div>}
            </div>
        </>
    );
}
export default AddBulkTab;