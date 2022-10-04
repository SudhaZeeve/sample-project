import { MdDashboardCustomize, MdPersonAdd } from "react-icons/md";
import {FaHandPointUp} from "react-icons/fa"
import {HiDocumentText,HiPlusCircle} from "react-icons/hi"

export const SidenavLink = [
    {
        Link: "dashboard",
        Icon: <MdDashboardCustomize />,
        Name: "Dashboard",
        CollapseID: "dashboard",
        child: []
    },
    {
        Link: "",
        Icon: <MdPersonAdd />,
        Name: "Leads",
        CollapseID: "Leads",
        child: [
            {
                Link: "add-lead",
                Icon: <HiPlusCircle />,
                Name: "Add Lead",
            },
            {
                Link: "manage-lead",
                Icon: <FaHandPointUp />,
                Name: "Manage Lead",
            },
        ]
    },
    {
        Link: "comission-report",
        Icon: <HiDocumentText />,
        Name: "Commission Report",
        CollapseID: "CommissionReport",
        child: []
    },
];