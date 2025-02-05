import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { TextField, Button, Box, Paper } from "@mui/material";

const UserDataForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      if (JSON.stringify(formData) !== JSON.stringify({})) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes!";
      }
    });
    return () => window.removeEventListener("beforeunload", () => { });
  }, [formData]);

  const handleSubmit = () => {
    dispatch(setUser(formData));
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Data Saved!");
  };

  return (
    <Paper elevation={0} sx={{ padding: 2, maxWidth: 500, mx: "auto", mt: 3 }}>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          label="Address"
          fullWidth
          variant="outlined"
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <TextField
          label="Phone"
          fullWidth
          variant="outlined"
          type="tel"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, py: 1.5, fontSize: "1rem" }}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};

export default UserDataForm;
