import React from "react";

const TextareaTag = ({Label,Required,Rowcount}) => {
    return (
        <div className="mb-3">
            { Label !== "" && <label htmlFor="exampleFormControlTextarea1" className="form-label">{Label} {Required && <span className="text-danger"> * </span>} </label>}
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={Rowcount}></textarea>
        </div>

    );
}
export default TextareaTag;