import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement, reset } from "../store/counterSlice";
import { Button, Box } from "@mui/material";
import { Refresh } from "@mui/icons-material";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box sx={{ mx: 5 }}>
      <h2>{count}</h2>
      <Button color='primary' variant="contained" onClick={() => dispatch(increment())}>+</Button>
      <Button color='secondary' variant="contained" sx={{ mx: 1 }} onClick={() => dispatch(decrement())}>-</Button>
      <Button color='warning' variant="outlined" onClick={() => dispatch(reset())}><Refresh /></Button>
    </Box>
  );
};

export default Counter;
