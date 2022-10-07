import React from "react";

const Modal = ({children,ModalTitle,btnName,btncancel,show,setShow,modalcustom,ContentID}) => {
    return (
        <div className={`modal modal-background ${show && 'fade show'}`} id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog"  style={{ display: "block" }}>
            <div className={`modal-dialog ${modalcustom}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-orange" id={`${ContentID}`}>{ModalTitle}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setShow(!show)} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-custom" data-bs-dismiss="modal"> {btnName}</button>
                        <button type="button" className="btn btnclose" data-bs-dismiss="modal" onClick={() => setShow(!show)} aria-label="Close">{btncancel}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;