import React from "react";
import logo from "../../images/logo.png"

const TopNavbar = () => {
    return (
        <div className="header py-3 px-3">
            <div className="row ">
                <div className="col-3">
                    <a href="#"> <img src={logo} width="70" /></a>
                </div>
                <div className="col-9 d-flex align-items-center justify-content-end">
                    <div className="dropdown">
                        <button className="btn user-dropdown dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user mr-2" aria-hidden="true"></i> <span className="text-gray"> Arun
                                Singh</span>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">API Details</a>
                            <a className="dropdown-item" href="#">Update Profile</a>
                            <a className="dropdown-item" href="#">Change Password</a>
                            <a className="dropdown-item" href="#">Log out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TopNavbar;