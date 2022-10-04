import React from "react";
import { MdOutlineDehaze } from "react-icons/md"
import { NavLink } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi"

const SideNavbar = ({ SidenavLink, hide, setHide }) => {
    return (
        <>
            <nav className="navbar-expand-lg navbar-light sidebar ">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className={` { "collapse navbar-collapse"}`}
                    id="navbarNavDropdown"
                >
                    <p onClick={() => setHide(!hide)} className="text-light text-end fs-5 cursor"><MdOutlineDehaze className="" /></p>
                    <ul className="list-unstyled mb-lg-0">
                        {SidenavLink.map((key, index) => {
                            return (
                                <li className="nav-item mb-4" key={index}>
                                    {!hide ?
                                        (<>
                                            {key.child.length === 0 && (
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        ` pe-5 ps-4 py-2 fs-6 text-decoration-none text-nowrap ${isActive
                                                            ? "text-orange bg-white shadow-sm rounded"
                                                            : " text-white "
                                                        }`
                                                    }
                                                    aria-current="page"
                                                    to={key.Link}
                                                >
                                                    {key.Icon}
                                                    <span className="ps-2">{key.Name}</span>
                                                </NavLink>
                                            )}

                                            {key.child.length !== 0 && (
                                                <>
                                                    <div className="">
                                                        <NavLink
                                                            className="pe-5 fs-6 ps-4 py-2 text-decoration-none text-nowrap text-white"
                                                            data-bs-toggle="collapse"
                                                            to={`#${key.CollapseID}`}
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls={`$${key.CollapseID}`}
                                                            aria-current="page"
                                                        >
                                                            {key.Icon}
                                                            <span className="ps-2">
                                                                {key.Name} <HiChevronDown className="ms-5" />
                                                            </span>
                                                        </NavLink>
                                                    </div>
                                                    <div
                                                        className="collapse bg-transparent"
                                                        id={`${key.CollapseID}`}
                                                    >
                                                        {key.child.map((item) => {
                                                            return (
                                                                <div className="mt-4">
                                                                    <NavLink
                                                                        className={({ isActive }) =>
                                                                            ` pe-5 ps-5 py-2 fs-6 text-decoration-none text-nowrap sidemenu ${isActive
                                                                                ? "text-orange  bg-white shadow-sm rounded-end"
                                                                                : " text-white "
                                                                            }`
                                                                        }
                                                                        aria-current="page"
                                                                        to={item.Link}
                                                                    >
                                                                        {item.Icon}
                                                                        <span className="ps-2 my-3 w-100">
                                                                            {item.Name}
                                                                        </span>
                                                                    </NavLink>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </>
                                            )}
                                        </>) : (<>
                                            {key.child.length === 0 && (
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        ` px-3 py-2 fs-6 text-decoration-none text-nowrap rounded ${isActive
                                                            ? "text-orange bg-white shadow-sm rounded-end"
                                                            : " text-white "
                                                        }`
                                                    }
                                                    aria-current="page"
                                                    to={key.Link}
                                                >
                                                    {key.Icon}

                                                </NavLink>
                                            )}

                                            {key.child.length !== 0 && (
                                                <>
                                                    <div className="">
                                                        <NavLink
                                                            className=" py-2 fs-6 text-decoration-none text-nowrap text-white"
                                                            data-bs-toggle="collapse"
                                                            to={`#${key.CollapseID}`}
                                                            role="button"
                                                            aria-expanded="false"
                                                            aria-controls={`$${key.CollapseID}`}
                                                            aria-current="page"
                                                        >

                                                            <span className="ps-2">
                                                                {key.Icon} <HiChevronDown className="ms-5" />
                                                            </span>
                                                        </NavLink>
                                                    </div>
                                                    <div
                                                        className="collapse bg-transparent"
                                                        id={`${key.CollapseID}`}
                                                    >
                                                        {key.child.map((item) => {
                                                            return (
                                                                <div className="mt-4">
                                                                    <NavLink
                                                                        className={({ isActive }) =>
                                                                            `px-3 py-2 fs-6 text-decoration-none text-nowrap sidemenu rounded ${isActive
                                                                                ? "text-orange bg-white shadow-sm rounded-end"
                                                                                : " text-white "
                                                                            }`
                                                                        }
                                                                        aria-current="page"
                                                                        to={item.Link}
                                                                    >
                                                                        {item.Icon}

                                                                    </NavLink>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </>
                                            )}
                                        </>)}
                                </li>
                            );
                        })
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default SideNavbar;