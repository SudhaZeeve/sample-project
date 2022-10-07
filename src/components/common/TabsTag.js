import React from "react";

const TabsTag = ({ Tablist, tab, setTab }) => {
    return (
        <>
            <ul className="nav nav-tabs mt-3 pb-3 custom-tabs">
                {Tablist.map((key, index) => {
                    return (
                        <li className="nav-item cursor" key={index} value={key.tabID}>
                            <a className={`nav-link ${tab === key.tabID && 'active'}`} data-toggle="tab" id={key.tabID} onClick={() => setTab(key.tabID)} role="tab" aria-selected="false">{key.TabName}</a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
export default TabsTag;