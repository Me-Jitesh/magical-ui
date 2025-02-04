import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { increment, decrement, reset } from "../store/counterSlice";
import { Button, Box } from "@mui/material";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box>
      <h2>Counter: {count}</h2>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(reset())}>Reset</Button>
    </Box>
  );
};

export default Counter;
