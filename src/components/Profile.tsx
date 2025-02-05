import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Box, Paper, Typography } from "@mui/material";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Paper elevation={0} sx={{ padding: 2, maxWidth: 600, mx: "auto", mt: 6 }}>
      <Box>
        <Typography variant="h6">User ID: {user.id}</Typography>
        <Typography variant="h6">Name: {user.name}</Typography>
        <Typography variant="h6">Address: {user.address}</Typography>
        <Typography variant="h6">Email: {user.email}</Typography>
        <Typography variant="h6">Phone: {user.phone}</Typography>
      </Box>
    </Paper>
  );
};

export default Profile;
