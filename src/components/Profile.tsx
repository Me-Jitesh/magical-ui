import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Box, Paper, Typography } from "@mui/material";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Paper elevation={0} sx={{ maxWidth: 600, mx: "auto", mt: 3 }}>
      <Box>
        <Typography variant="h5">User ID : {user.id}</Typography>
        <hr />
        <Typography variant="h5">Name : {user.name}</Typography>
        <hr />
        <Typography variant="h5">Address : {user.address}</Typography>
        <hr />
        <Typography variant="h5">Email : {user.email}</Typography>
        <hr />
        <Typography variant="h5">Phone : {user.phone}</Typography>
      </Box>
    </Paper>
  );
};

export default Profile;
