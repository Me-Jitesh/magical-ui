import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import Swal from "sweetalert2";

const UserDataForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isFormDirty) return;
      event.preventDefault();
      event.returnValue = ""; // Stop browser default alert
      Swal.fire({
        title: "Unsaved Changes!",
        text: "You have unsaved changes. Are you sure you want to leave?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Leave Page",
        cancelButtonText: "Stay",
        confirmButtonColor: "#d32f2f",
        cancelButtonColor: "#6a1b9a",
      }).then((result) => {
        if (result.isConfirmed) {
          navigator.sendBeacon("/log-exit", "User left without saving"); // Prevent browser alert
          window.removeEventListener("beforeunload", handleBeforeUnload);
          window.location.reload();
        }
      });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isFormDirty]);

  const handleSubmit = () => {
    dispatch(setUser(formData));
    localStorage.setItem("user", JSON.stringify(formData));
    setIsFormDirty(false);

    Swal.fire({
      title: "Success!",
      text: "User data has been saved successfully.",
      icon: "success",
      confirmButtonColor: "#6a1b9a",
    });
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 500, mx: "auto", mt: 3 }}>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        User Data Form
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            setIsFormDirty(true);
          }}
        />
        <TextField
          label="Address"
          fullWidth
          variant="outlined"
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
            setIsFormDirty(true);
          }}
        />
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          type="email"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            setIsFormDirty(true);
          }}
        />
        <TextField
          label="Phone"
          fullWidth
          variant="outlined"
          type="tel"
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            setIsFormDirty(true);
          }}
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
