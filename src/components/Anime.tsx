import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useSpring, animated } from "react-spring";
import { Box } from "@mui/material";

const Anime = () => {
    const count = useSelector((state: RootState) => state.counter.value);

    const bgAnimation = useSpring({
        height: `${count * 10}px`,
        background: "linear-gradient(45deg, #2196F3, #21CBF3)",
        config: { tension: 200, friction: 10 },
    });

    return (
        <Box>
            <animated.div style={bgAnimation} className="counter-bg" />
        </Box>
    );
};

export default Anime;
