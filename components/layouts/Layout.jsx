import Head from "next/head";
import { Box } from "@mui/material";
import { NavBar } from "../ui";

export const Layout = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <NavBar/>

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
};