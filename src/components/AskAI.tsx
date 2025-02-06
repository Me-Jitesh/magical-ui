import React from "react";
import Swal from "sweetalert2";
import IconButton from "@mui/material/IconButton";
import { SupportAgent } from "@mui/icons-material";

const AskAI: React.FC = () => {
    // Ask AI Function
    const askQuestion = async () => {
        const { value: question } = await Swal.fire({
            title: "Ask AI",
            input: "text",
            inputPlaceholder: "Type your question...",
            showCancelButton: true,
            confirmButtonText: "Ask Now",
        });

        if (question) {
            const aiResponse = `AI says: "${question}" is a great question!`;
            Swal.fire({ title: "AI Response", text: aiResponse, icon: "info", confirmButtonText: "Close" });
        }
    };

    return (
        <IconButton color="primary" size="large" onClick={askQuestion}>
            <SupportAgent />
        </IconButton>
    );
};

export default AskAI;
