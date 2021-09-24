import React, { useState, useEffect}from 'react'
import styled from "styled-components"

function Countdown({ mm, hh }) {
    
    const [minutes, setMinutes] = useState(mm);
    const [seconds, setSeconds] = useState(hh);

    useEffect(() => {
    const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
                clearInterval(countdown);
            } else {
                setMinutes(parseInt(minutes) - 1);
                setSeconds(59);
            }
        }
    }, 1000);
    return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
         <Timewrap>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </Timewrap>
    )
}

export default Countdown;

const Timewrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`
