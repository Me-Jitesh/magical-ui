import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Box, Typography } from "@mui/material";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Box>
      <Typography variant="h6">User ID: {user.id}</Typography>
      <Typography variant="h6">Name: {user.name}</Typography>
      <Typography variant="h6">Address: {user.address}</Typography>
      <Typography variant="h6">Email: {user.email}</Typography>
      <Typography variant="h6">Phone: {user.phone}</Typography>
    </Box>
  );
};

export default Profile;
