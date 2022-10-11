import React from "react";

const AddCard = ({Heading,children,subheading}) => {
    return (
        <>
            <div className="addcard border-bottom mb-3 content">
                <h5 className="text-orange">{Heading}<span style={{fontSize:"12px"}} className="text-gray"> {[subheading]}</span></h5>
                {children}
            </div>
        </>
    );
}
export default AddCard;