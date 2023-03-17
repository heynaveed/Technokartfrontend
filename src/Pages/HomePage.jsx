import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <Text fontSize={{ base: "20px", md: "30px", lg: "40px" }} fontWeight={"600"}>TECHNOCART ASSIGNMENT</Text>
            <br />
            <Text fontSize={{ base: "18px", md: "28px", lg: "35px" }} fontWeight={"600"}>HOME PAGE</Text>
            <br />
            <Flex h={"80px"} width={{ base: "80%", md: "60%", lg: "50%" }} m="auto" justifyContent={"space-evenly"} alignItems={"center"}>
                <Link to={"/super-admin/login"}><Button colorScheme='teal' size={{ base: "sm", md: "md", lg: "lg" }}>
                    SUPER ADMIN LOGIN
                </Button></Link>
                <Link to={"/partner-name/login"}><Button colorScheme='teal' size={{ base: "sm", md: "md", lg: "lg" }}>
                    PARTNER LOGIN
                </Button></Link>
            </Flex>
        </>
    )
}