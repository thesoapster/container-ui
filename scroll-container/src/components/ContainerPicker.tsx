import { useContext } from "react";
import { AppDataContext } from "../stores/AppData";
import { Autocomplete, Box, TextField } from "@mui/material";

const ContainerPicker = () => {
    const { data } = useContext(AppDataContext);

    return (
        <Box
            sx={{
                m: 0,
                display: "inline-block",
                width: "16rem",
            }}
        >
            <Autocomplete
                options={data}
                autoComplete
                renderInput={(params) => (
                    <TextField {...params} label="Containers" />
                )}
            />
        </Box>
    );
};

export default ContainerPicker;
