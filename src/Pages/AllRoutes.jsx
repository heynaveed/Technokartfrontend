import { Route, Routes } from "react-router-dom";
import SuperAdminLogin from "./AdminLoginpage";
import Dashboard from "./Dashboardpage";
import Home from "./HomePage";
import PartnerLogin from "./PartnerLoginpage";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/super-admin/login" element={<SuperAdminLogin/>}/>
            <Route path="/super-admin/dashboard" element={<Dashboard/>}/>
            <Route path="/partner-name/login" element={<PartnerLogin/>}/>
            <Route path="/partner-name/add_event" element={"add_event"}/>
            <Route path="/partner-name/thankyoupage" element={"thankyoupage"}/>
        </Routes>
    )
}