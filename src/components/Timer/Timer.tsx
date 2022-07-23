import {FC, memo, useCallback, useEffect, useState} from "react";
import {ITimer} from "./types";

const Timer: FC<ITimer> = ({onSetGameTime}) => {
    let secondStep = 0;
    let timer;

    const [hours, setHours] = useState('00:')
    const [minutes, setMinutes] = useState('00:')
    const [seconds, setSeconds] = useState('00')


    const startTimer = useCallback(() => {
        timer = setInterval(() => {
            secondStep = secondStep + 1000;
            let dateTimer = new Date(secondStep);
            setHours(('0' + dateTimer.getUTCHours()).slice(-2) + ':')
            setMinutes(('0' + dateTimer.getUTCMinutes()).slice(-2) + ':')
            setSeconds(('0' + dateTimer.getUTCSeconds()).slice(-2))
        }, 1000)
    }, [])
    useEffect(() => {
            startTimer()
        }
        , [])
    useEffect(() => {
        onSetGameTime(hours + minutes + seconds)
    }, [seconds])

    return (<div>
            <div>
                <span>{hours}</span>
                <span>{minutes}</span>
                <span>{seconds}</span>
            </div>
        </div>
    )
}

export default memo(Timer)