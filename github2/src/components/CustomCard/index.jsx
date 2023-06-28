import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const CustomCard = ({ user, handleclick }) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar src={user.avatar_url} />
            </Grid>
            <Grid item>
              <Typography  variant="body" onClick={() => handleclick(user.login)}>
                {user.login}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CustomCard;