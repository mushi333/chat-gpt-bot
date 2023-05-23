import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const defaultTheme = createTheme();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const list = Array.from(Array(10)).map((_, i) => (
    <Item key={i}>Value is {i}</Item>
  ));

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="static">
        <Toolbar sx={{ background: "#1EC14C" }}>Home</Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: "1em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack spacing={{ md: 2 }}>{list}</Stack>
          <TextField
            sx={{ paddingTop: "1em", width: 500 }}
            defaultValue="Prompt"
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
