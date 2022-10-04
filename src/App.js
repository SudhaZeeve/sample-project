import {useRoutes} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddLead from "./components/add lead/AddLead";
import CommissionReport from "./components/comissionreport/ComissionReport";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/Login/Login";
import ManageLead from "./components/manage lead/ManageLead";
import UserLayout from "./userLayout";


const routes = [
  {
    path:"/",
    element:<Login />
  },
  {
    path:"/user",
    element:<UserLayout />,
    children:[
      {
        path:"dashboard",
        element:<Dashboard />
      },
      {
        path:"comission-report",
        element:<CommissionReport />
      },
      {
        path:"add-lead",
        element:<AddLead />
      },
      {
        path:"manage-lead",
        element:<ManageLead />
      },
    ],
  },
 
];


function App() { 
  const element = useRoutes(routes);
  return (
    <>{element}</>
  );
}

export default App;
