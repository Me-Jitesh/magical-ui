import React from "react";
import Swal from "sweetalert2";
import IconButton from "@mui/material/IconButton";
import { SupportAgent } from "@mui/icons-material";
import axios from "axios";
import { Typography } from "@mui/material";

const AskAI: React.FC = () => {

    const API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY || "";

    // Ask AI Function
    const askQuestion = async () => {
        const { value: question } = await Swal.fire({
            title: "DeepSeek Smart Assistant",
            input: "text",
            inputPlaceholder: "Type your question...",
            showCancelButton: true,
            confirmButtonText: "Ask Now",
        });

        if (question) {

            Swal.fire({
                title: "Please wait...",
                text: "Fetching AI response...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });

            try {
                const response = await axios.post(
                    "https://openrouter.ai/api/v1/chat/completions", // DeepSeek API endpoint
                    {
                        model: "deepseek/deepseek-r1:free",
                        messages: [{ role: "user", content: question }],
                    },
                    {
                        headers: {
                            "Authorization": `Bearer ${API_KEY}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                const aiResponse = response.data.choices[0].message.content;

                Swal.close();
                Swal.fire({
                    title: "AI Response",
                    text: aiResponse,
                    icon: "info",
                    confirmButtonText: "Close",
                });
            } catch (error) {
                Swal.close();
                Swal.fire({
                    title: "Error",
                    text: "Sorry, there was an error fetching the AI response.",
                    icon: "error",
                    confirmButtonText: "Close",
                });
                console.error("Error fetching AI response:", error);
            }
        }
    };

    return (
        <IconButton color="primary" size="large" onClick={askQuestion}>
            <Typography variant="body2" sx={{ mr: 1, color: "#D3C5E0" }}>
                Ask AI
            </Typography>
            <SupportAgent />
        </IconButton>
    );
};

export default AskAI;
