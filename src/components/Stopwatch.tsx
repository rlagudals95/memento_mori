import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';
import styled from "styled-components"

const Stopwatch = () => (
  <ReactStopwatch
    seconds={50}
    minutes={50}
    hours={50}
    limit="00:00:5"
    onChange={({ hours, minutes, seconds }) => {
        
    }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <Timewrap>
          <p>
            Formatted: { formatted }
          </p>
        </Timewrap>
      );
    }}
   />
);
 
export default Stopwatch;

const Timewrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`

