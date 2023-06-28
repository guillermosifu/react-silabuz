import { Button, Container, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

const Search = () => {
    //es el hook que almacena los usuarios y ejecuta su busqueda
const[username,setUsername]=useState("");

//esta funcion es el evento  cptura la data del input
const handleInputChange =(e)=>{
    setUsername(e.target.value)
}

  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
      <Grid container spacing={3}>
        <h1>Buscando Usuarios</h1>
        <Grid item xs={12}>
            <TextField 
            onChange={handleInputChange}
            label ="buscar usuarios Github"
            value={username} 
            fullWidth/>
        </Grid>
        <Grid item xs={12}>
           <Button variant="contained" fullWidth>
            Buscar
           </Button>
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default Search;
