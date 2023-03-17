import { Box, Text, FormLabel, Input, Button, useToast } from "@chakra-ui/react";
import {PartnerLoginss} from "../Components/Fetch"
import { useState } from "react";

export default function PartnerLogin(){
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    function HandelLogin(){
        PartnerLoginss().then((res)=>{
            console.log(res.data)
        })
    }
    return(
        <>
        <Box padding={"10px"} border={"2px solid"} w={{ base: "80%", md: "50%", lg: "25%" }} m={"auto"} mt={"30px"}>
                <Text fontSize={{ base: "18px", md: "25px", lg: "30px" }} mb={"20px"}>
                    PARTNER LOGIN
                </Text>
                <FormLabel>Partner Email</FormLabel>
                <Input placeholder='Enter Email' type={"email"} value={email} onChange={(e) => setemail(e.target.value)} />
                <br />
                <br />
                <FormLabel>Password</FormLabel>
                <Input placeholder='Enter Password' type={"text"} value={password} onChange={(e) => setpassword(e.target.value)} />
                <br /> <br />
                <Button colorScheme='teal' size='md' mb={"20px"} onClick={HandelLogin}>
                    LOGIN
                </Button>
            </Box>
        </>
    )
}