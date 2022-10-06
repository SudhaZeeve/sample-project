import React from "react";

const SelectTag = ({ Label, Required,optionData,customClass }) => {
    return (
        <>
            {Label !== "" && <label className="form-label">{Label} {Required && <span className="text-danger">*</span>}</label>}
            <select className={`form-select form-control ${customClass}`}>
                {optionData.map((key, index) => {
                    return (
                        <option value={key.OptionValue} key={index}>{key.OptionValue}</option>
                    );
                })
                }
            </select>
        </>
    );
}
export default SelectTag;