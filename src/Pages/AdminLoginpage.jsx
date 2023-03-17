import { Box, Text, FormLabel, Input, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminLogin } from "../Components/Fetch";
import { AdminLoginFailure, AdminLoginRequest, AdminLoginSuccess } from "../Redux/Action";

export default function SuperAdminLogin() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const toast = useToast()
    const Navigate=useNavigate()
    const DisPatch = useDispatch();

    function HandelLogin() {
        const payload = {
            email: email,
            password: password
        }
        DisPatch(AdminLoginRequest())

        AdminLogin(payload).then((res) => {
            localStorage.setItem('AdminToken', JSON.stringify(res.data.token));
            DisPatch(AdminLoginSuccess(res.data));
           if(res.data !== "data didn't match"){
            toast({
                title: 'Loged In',
                description:res.data.msg,
                status: 'success',
                duration: 5000,
                isClosable: true,
                position:"top"
              })
              Navigate("/super-admin/dashboard");
            }
            else{
                toast({
                    title: 'Login Failed',
                    description:"Incorrect Credentials",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position:"top"
                  })
            }
        })
            .catch((err) => {
                DisPatch(AdminLoginFailure());
            })
    }
    return (
        <>
            <Box padding={"10px"} border={"2px solid"} w={{ base: "80%", md: "50%", lg: "25%" }} m={"auto"} mt={"30px"}>
                <Text fontSize={{ base: "18px", md: "25px", lg: "30px" }} mb={"20px"}>
                    SUPER ADMIN LOGIN
                </Text>
                <FormLabel>Admin Email</FormLabel>
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