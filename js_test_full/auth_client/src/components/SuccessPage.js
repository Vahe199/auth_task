import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const SuccessPage = () => {
    return(
        <Container fixed>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                <Typography mt={2} variant={"h2"}>
                    You have successfully logged in
                </Typography>
            </Box>
        </Container>
    )
}
