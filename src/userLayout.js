import React, { useState } from "react";
import { Outlet } from "react-router";
import TopNavbar from "./components/navbar/TopNavbar";
import { SidenavLink } from "./components/navbar/StaticData";
import SideNavbar from "./components/navbar/SideNavbar";

const UserLayout = () => {
    const [hide, setHide] = useState();
    return (
        <div className="container-fluid bg-light">
            <div className="row"> <TopNavbar /></div>

            <div className="row gray-bg">
                <div className={`${!hide ? 'col-xl-2 col-lg-2 col-sm-12 col-md-12 px-0 bg-custom  d-flex flex-column flex-shrink-0 pe-0' : 'col-xl-1 col-lg-1 col-sm-12 col-md-12 px-0 bg-custom  d-flex flex-column flex-shrink-0 pe-0'}`}>
                    <SideNavbar SidenavLink={SidenavLink} hide={hide} setHide={setHide} />
                </div>

                <div className={`${!hide ? 'col-xl-10 col-lg-10 col-md-12 col-sm-12 px-4' : 'col-xl-11 col-lg-11 col-md-12 col-sm-12 px-4'}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
export default UserLayout;