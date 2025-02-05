import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement, reset } from "../store/counterSlice";
import { Button, Box } from "@mui/material";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box sx={{ mx: 5 }}>
      <h2>{count}</h2>
      <Button color='info' variant="contained" onClick={() => dispatch(increment())}>+</Button>
      <Button color='secondary' variant="contained" sx={{ mx: 1 }} onClick={() => dispatch(decrement())}>-</Button>
      <Button color='primary' variant="outlined" onClick={() => dispatch(reset())}>Reset</Button>
    </Box>
  );
};

export default Counter;
