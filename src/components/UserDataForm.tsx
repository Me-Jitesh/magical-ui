import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { TextField, Button, Box } from "@mui/material";

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
    <Box sx={{ padding: '0rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <TextField label="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <TextField label="Address" onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
      <TextField label="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <TextField label="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <Button variant="outlined" color="secondary" onClick={handleSubmit}>Save</Button>
    </Box>
  );
};

export default UserDataForm;
