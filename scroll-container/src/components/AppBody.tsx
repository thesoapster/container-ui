import { Box } from "@mui/material";
import MainWindow from "./MainWindow";

const AppBody = () => {
    return (
        <Box
            sx={{
                m: 0,
                p: 0,
                height: "100vh",
                width: "100vw",
                background: "linear-gradient(#d5e0e6, #afc0c9)",
            }}
        >
            <MainWindow />
        </Box>
    )
};

export default AppBody;
