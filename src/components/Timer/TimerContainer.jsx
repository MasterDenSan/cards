import React, {useCallback} from "react";
import Timer from "./Timer";
import {useDispatch} from "react-redux";
import {setGameTime} from "../../store/actions/cardGameActions";
import "./TimerContainer.scss"

export default React.memo(function UserInfo() {
    const dispatch = useDispatch()
    const onSetGameTime = useCallback((time) => {
        dispatch(setGameTime(time))
    }, [])

    return (
        <div className={"timer"}>
            <Timer onSetGameTime={onSetGameTime}/>
        </div>
    )
})