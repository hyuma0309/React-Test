import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../store/index";
import { actions as counterActions } from "../store/count/counterSlice";

export const useStore = () => {
  const dispatch = useDispatch();

  return {
    state: useSelector((state: RootState) => state),
    dispatch,
    actions: {
      count: counterActions,
    },
  };
};
