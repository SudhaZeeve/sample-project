import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
import BrowserModal from "../../common/BrowserModal";
import InputTag from "../../common/InputTag";
import Modal from "../../common/Modal";
import TextareaTag from "../../common/TextareaTag";

const Upload = ({ InputvalueData }) => {

    const [show, setShow] = useState(false);
    const [row,setRow] = useState(InputvalueData);

    const [change, setChange] = useState({PAN:"",VoterID:"",ElectricityBill:"",Adhar:"",Passport:"",PhoneBill:"",DrivingLicense:"",Photo:"",GSTNumber:"" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setChange({ ...change, [name]: value });
    }

    const valFun = (key) =>{
        switch (key) {
            case "PAN":
                return change.PAN;
            case "VoterID":
                return change.VoterID;
            case "ElectricityBill":
                return change.ElectricityBill;
            case "Adhar":
                return change.Adhar;
            case "Passport":
                return change.Passport;
            case "PhoneBill":
                return change.PhoneBill;
            case "DrivingLicense":
                return change.DrivingLicense;
            case "Photo":
                return change.Photo;
            case "GSTNumber":
                return change.GSTNumber;
            default:
                return change.PAN;
        }
    } 

    let Inputdata;

    const addNew = () =>{
        Inputdata = [...row,{type:"text", placeholderval:"", name:""}]; 
        setRow(Inputdata);
    }

    return (
        <>
            {row.map((key,index) => {
                return (
                    <div className="row my-2" key={index}>
                        <div className="col-md-5 pr-0">
                            <InputTag Label="" Type={key.type} Placeholder={key.placeholderval} Value={valFun(key.name)} onChangeValue={handleChange} name={key.name}  />
                        </div>
                        <div className="col-md-2 d-flex align-items-center gap-2">
                            <button onClick={() => setShow(!show)} type="button" className="btn btn-custom  btn-custom-height"
                                data-toggle="modal" data-target="#myModal">Upload</button>
                            <FaPlusCircle className="text-gray fs-3" onClick={()=>addNew()} />
                        </div>
                    </div>
                );
            })}
            {show && <Modal ModalTitle="Document Upload" btnName="Submit" btncancel="Close" show={show} setShow={setShow} modalcustom="modal-dialog-centered" ContentID="examplemodal">
                <BrowserModal change={change} setChange={setChange} handleChange={handleChange} />
                <TextareaTag Label="Comment" Rowcount="3" />
            </Modal>}
        </>
    );
}
export default Upload