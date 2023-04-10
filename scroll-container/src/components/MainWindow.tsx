import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ContainerPicker from "./ContainerPicker";
import AppDataProvider from "../stores/AppData";

const MainWindow = () => {
    return (
        <AppDataProvider>
            <Box
                sx={{
                    m: "0 auto",
                    position: "relative",
                    top: "5vh",
                    height: "85vh",
                    width: "90vw",
                    borderRadius: 2,
                    background: "#fff",
                }}
            >
                <Box
                    sx={{
                        width: "21rem",
                        p: 3,
                        position: "relative",
                    }}
                >
                    <ContainerPicker />
                    <Box
                        sx={{
                            position: "absolute",
                            right: 0,
                            top: 35,
                        }}
                    >
                    <Button
                        variant="outlined"
                        endIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                    </Box>
                </Box>
            </Box>
        </AppDataProvider>
    );
};

export default MainWindow;
