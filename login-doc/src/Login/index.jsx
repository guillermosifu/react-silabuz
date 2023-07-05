import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Button, Grid, TextField, Card, CardContent } from "@mui/material";
import Swal from "sweetalert2";

const Login = () => {
   const{user,storeUser}=useContext(UserContext)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    const{name,value} = e.target
    setUserData({
      ...userData,
      [name]:value
    })
  };

  const handleClickLogin=()=>{
    if(userData.email === "pepe@gmail.com" && userData.password === "12345678"){
      const user ={
        nombre : "pepe",
        apellido:"zapata",
        edad:30,
        dni:45555555
      }storeUser(user)
    }
  }

  return (
    <Grid container>
      <Grid item md={6}>
        <img
          src="https://www.mundodeportivo.com/alfabeta/hero/2023/06/tras-7-anos-marvel-ha-renovado-su-intro-y-su-logo.jpg?width=768&aspect_ratio=16:9&format=nowebp"
          alt=""
        />
      </Grid>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <h5>Bienvenido</h5>
            <h3>Silabuz Front End</h3>
            <p>Estamos aprendiendo Login Rutas</p>
            <Grid container mt={5} spacing={3}>
              <Grid item md={12}>
                <TextField label="Email" fullWidth name="email" />
              </Grid>
              <Grid item md={12}>
                <TextField label="password" fullWidth name="password" />
              </Grid>
              <Grid item md={12}>
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                >
                  Iniciar Sesion
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
