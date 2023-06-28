import { useState, useEffect } from "react";
import { searchUser, getRepos } from "../../services";
import { useParams } from "react-router-dom";
import {
  Button,
  Box,
  Container,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const User = () => {
  const { username } = useParams();

  const [userDetail, setUSerDetail] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUser = async () => {
    const data = await searchUser(username);
    setUSerDetail(data);
  };

  const fetchRepos = async () => {
    const data = await getRepos(username);
    setRepos(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Container>
      <Box>
        <Grid>
          <Grid item xs={12} md={4}>
            <Box mb={1}>
              <img src="" alt="" />
            </Box>
            <Typography variant="h6">{userDetail.name}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default User;
