import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setGameTime } from "../../store/actions/cardGameActions";
import Timer from "./Timer";
import "./TimerContainer.scss";

const TimerContainer = () => {
  const dispatch = useDispatch();
  const onSetGameTime = useCallback((time) => {
    dispatch(setGameTime(time));
  }, []);

  return (
    <div className={"timer"}>
      <Timer onSetGameTime={onSetGameTime} />
    </div>
  );
};

export default memo(TimerContainer);
