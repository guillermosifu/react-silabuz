import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  //es el hook que almacena los usuarios y ejecuta su busqueda
  const [username, setUsername] = useState("");

  //esta funcion es el evento  cptura la data del input
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Container
    maxWidth="sm"
    sx={{
      display: "flex",
      alignItems: "center",
      height: "100vh",
    }}
  >
    
    <Grid container spacing={3}>
      <h1>BUSCANDO USUARIOS</h1>
      <Grid item xs={12}>
        <TextField
          label="Buscar usuario de github"
          onChange={handleInputChange}
          value={username}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Link to={`/users/${username}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" fullWidth>
            Buscar
          </Button>
        </Link>
      </Grid>
    </Grid>
  </Container>
  );
};

export default Search;
