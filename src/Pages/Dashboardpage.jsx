import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AllPartners, PartnerLogin, PostPartners } from "../Components/Fetch";
import PartnerTable from "../Components/Table";

export default function Dashboard(){
    const payload = {
        Partner_email: "heyabrarkhan@gmail.com",
        Partner_name: "Abrar"
    }
   
    const GetPartners=()=>{

        AllPartners().then((res)=>{
            console.log("resss",res);
        })
        .catch((err)=>{
            console.log("error");
            console.log(err);
        })
        // PostPartners(payload).then((res)=>{
        //     console.log(res.data)
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })

        // PartnerLogin(payload).then((res)=>{
        //     console.log(res.data);
        // })
    }
    useEffect(()=>{
       GetPartners();
    },[])
    return(
        <>
        <Text fontSize={{ base: "18px", md: "28px", lg: "35px" }} fontWeight={"600"}>
            DASHBOARD PAGE
        </Text>
        <br />
        <PartnerTable/>
        </>
    )
}