import{useState,useEffect} from"react"
import { useParams,useNavigate } from "react-router-dom";
import { SearchUsers } from "../../services";
import{Box,Container,Typography} from "@mui/material"


const Users=()=>{
    const{username}=useParams();
    const[usersList,setUsersList]=useState([])

    const history =useNavigate()


    const fetchUSers =async()=>{
        const data = await SearchUsers(username)
        setUsersList(data.items);
    }

    const handleClick =(username)=>{
        history(`/user/${username}`)

    }

    useEffect(()=>{
        fetchUSers()
    },[])


    return(

          <Container>
            <Box mt={10}>
                <Typography variant="h6">
                    Resultado de la busqueda de ususario :@{username}
                </Typography>
            </Box>
          </Container>



    )
}