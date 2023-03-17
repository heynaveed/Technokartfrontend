import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

export default function PartnerTable(){
    return (
        <>
            <TableContainer w={{base:"80%",md:"60%",lg:"60%"}} m={"auto"}>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>SL No</Th>
                            <Th>Partner Name</Th>
                            <Th>Email</Th>
                            <Th>Login Link</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>millimetres (mm)</Td>
                            <Td>millimetres (mm)</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}