import Head from "next/head";
import { Box } from "@mui/material";
import { NavBar, SideBar } from "../ui";

export const Layout = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            <NavBar/>
            <SideBar/>

            <Box sx={{ padding: '10px 20px' }}>
                {children}
            </Box>
        </Box>
    )
};
