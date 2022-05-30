import Countdown from "react-countdown";
import styled from "@emotion/styled";
import { useState } from "react";

const TimerTxt = styled.div`
  color: #ff9a31;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
`;
export default function TestPage() {
  const [aa, setAa] = useState(false);
  const clicktest = ()=>{
      setAa(true)
  }
  const renderer = ({ minutes, seconds }) => {
    return (
      <TimerTxt>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </TimerTxt>
    );
  };
  return (
    <div>11
        <button onClick={clicktest}>dd</button>
      {aa &&(<Countdown renderer={renderer} date={Date.now() + 180000} />)}
    </div>
  );
}
