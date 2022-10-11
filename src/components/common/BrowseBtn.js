import React from "react";

const BrowseBtn = () => {
    return (
        <>
            <div className="custom-file-uploader">
                <input type="file" className="custom-file-input" />
                <button type="button" className="btn btn-custom ">Browse</button>
            </div>
        </>
    );
}
export default BrowseBtn;