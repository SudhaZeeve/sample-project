import React from "react";

const InputTag = (props) => {

    const {Label, Type, Placeholder, Value, Disabled, Required,onChangeValue,name,classcol} = props;

    return (
        <>
            <div className={`form-group ${classcol}`}>
                {Label !== "" && <label>{Label} {Required && <span className="text-danger">*</span>} </label>}
                <input type={Type} className="form-control" placeholder={Placeholder} value={Value} disabled={Disabled} 
                onChange={(e)=> onChangeValue(e)} name={name} />
            </div>
        </>
    );
}
export default InputTag;