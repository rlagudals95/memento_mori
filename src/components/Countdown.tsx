import React, { useState, useEffect}from 'react'
import styled from "styled-components"
import PropTypes from "prop-types";

Countdown.propTypes = {
  mm: PropTypes.number,
  hh: PropTypes.number,
};

function Countdown({ mm, hh }) {
    
    const [minutes, setMinutes] = useState<number>(mm);
    const [seconds, setSeconds] = useState<number>(hh);

    useEffect(() => {
    const countdown = setInterval(() => {
            if (seconds > 0) {
            setSeconds(seconds - 1);
            }
            if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(countdown);
            } else {
                setMinutes(minutes - 1);
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
