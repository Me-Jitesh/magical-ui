import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import axios from "axios";

const IPGeoLocation: React.FC = () => {
    const [ip, setIp] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    useEffect(() => {
        const fetchIPandLocation = async () => {
            try {
                const { data } = await axios.get("https://ipwhois.app/json/");
                const country = data.country_name || "India";
                const city = data.city || "Unknown";
                setIp(data.ip);
                setLocation(`${city}, ${country}`);
            } catch (error) {
                console.error("Error fetching IP and location", error);
            }
        };

        fetchIPandLocation();
    }, []);

    return (
        <Box sx={{ textAlign: "right" }}>
            <Typography variant="body1" color="primary" fontWeight={'bolder'}>IP : {ip || "Loading..."}</Typography>
            <Typography variant="body2" color="warning" fontWeight={'bold'}>📍 {location || "Fetching..."}</Typography>
        </Box>
    );
};

export default IPGeoLocation;
