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
import { TypographyIconBio } from "../../components";


const User = () => {
  const { username } = useParams();
  const [userDetail, setUSerDetail] = useState(null);
  const [repos, setRepos] = useState([]);

  //esta funcion consume la funcion del api usuariodetail
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
      {userDetail && (
        <Box mt={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box>
                <img src={userDetail.avatar_url} alt={userDetail.login} />
              </Box>
              <Typography variant="h6">{userDetail.name}</Typography>
              <Typography variant="h6" fontWeight="350" color="#bbbbb">
                {userDetail.login}
              </Typography>
              <Typography variant="h6">{userDetail.bio}</Typography>
              <Button fullWidth variant="contained">
                EDIT PROFILE
              </Button>
              <TypographyIconBio icon="people" text={userDetail.followers} />
              <TypographyIconBio icon="company" text={userDetail.company} />
              <TypographyIconBio icon="lacation" text={userDetail.location} />
              <TypographyIconBio icon="email" text={userDetail.email} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography>Repositories</Typography>
              <Box>
                {repos.length > 0 &&
                  repos.map((repo, index) => (
                    <Box key={index}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" fontWeight="800">
                            {repo.name}
                          </Typography>
                          <Typography>{repo.language}</Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default User;
